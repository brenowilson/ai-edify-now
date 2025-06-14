import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFDownloadLink,
  Image
} from '@react-pdf/renderer';

// Custom font registration (optional for better look)
// Font.register({ family: 'Inter', src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTcviYw.woff2' });

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    color: '#111',
    padding: 32,
    fontSize: 13,
    fontFamily: 'Helvetica',
    lineHeight: 1.7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 10,
  },
  logoImg: {
    height: 36,
    width: 'auto',
    marginRight: 10,
    objectFit: 'contain',
  },
  title: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7c3aed',
    marginBottom: 6,
    marginTop: 16,
  },
  paragraph: {
    marginBottom: 7,
  },
  bullet: {
    marginLeft: 14,
    marginBottom: 4,
  }
});

// Improved markdown to PDF conversion for headings, bold, italics, lists, paragraphs
function renderMarkdown(md: string) {
  const lines = md.split(/\n+/);
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const parseInline = (text: string) => {
    // Replace bold (**text** or __text__)
    let nodes: React.ReactNode[] = [];
    let buffer = '';
    let i = 0;
    while (i < text.length) {
      if (text.slice(i, i + 2) === '**') {
        if (buffer) { nodes.push(<Text key={i + '-b'}>{buffer}</Text>); buffer = ''; }
        i += 2;
        let end = text.indexOf('**', i);
        if (end !== -1) {
          nodes.push(<Text key={i + '-b-bold'} style={{fontWeight: 'bold'}}>{text.slice(i, end)}</Text>);
          i = end + 2;
        } else {
          buffer += '**'; i++;
        }
      } else if (text.slice(i, i + 1) === '*') {
        if (buffer) { nodes.push(<Text key={i + '-i'}>{buffer}</Text>); buffer = ''; }
        i += 1;
        let end = text.indexOf('*', i);
        if (end !== -1) {
          nodes.push(<Text key={i + '-i-italic'} style={{fontStyle: 'italic'}}>{text.slice(i, end)}</Text>);
          i = end + 1;
        } else {
          buffer += '*'; i++;
        }
      } else {
        buffer += text[i];
        i++;
      }
    }
    if (buffer) nodes.push(<Text key={'last'}>{buffer}</Text>);
    return nodes;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    // Headings
    if (/^#{1,6} /.test(trimmed)) {
      if (inList && listItems.length) {
        elements.push(<View key={`list-${idx}`}>{listItems}</View>);
        listItems = [];
        inList = false;
      }
      elements.push(
        <Text key={`h-${idx}`} style={styles.heading}>
          {parseInline(trimmed.replace(/^#{1,6} /, ''))}
        </Text>
      );
    } else if (/^\* |^- /.test(trimmed)) {
      // Bullet lists
      inList = true;
      listItems.push(
        <Text key={`li-${idx}`} style={styles.bullet}>
          • {parseInline(trimmed.replace(/^\* |^- /, ''))}
        </Text>
      );
    } else if (trimmed) {
      if (inList && listItems.length) {
        elements.push(<View key={`list-${idx}`}>{listItems}</View>);
        listItems = [];
        inList = false;
      }
      elements.push(
        <Text key={`p-${idx}`} style={styles.paragraph}>
          {parseInline(trimmed)}
        </Text>
      );
    }
  });
  if (inList && listItems.length) {
    elements.push(<View key={`list-end`}>{listItems}</View>);
  }
  return elements;
}

interface TeacherAIPdfProps {
  topic: string;
  content: string;
}

export const TeacherAIPdf: React.FC<TeacherAIPdfProps> = ({ topic, content }) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <Image src={'/logo.png'} style={styles.logoImg} />
        <Text style={styles.title}>{topic}</Text>
      </View>
      <View style={styles.section}>{renderMarkdown(content)}</View>
    </Page>
  </Document>
);

// Export a PDFDownloadLink wrapper for convenience
export const TeacherAIPdfDownload: React.FC<TeacherAIPdfProps & { children: React.ReactNode }> = ({ topic, content, children }) => (
  <PDFDownloadLink document={<TeacherAIPdf topic={topic} content={content} />} fileName={`${topic}-TeacherAI.pdf`}>
    {children}
  </PDFDownloadLink>
);
