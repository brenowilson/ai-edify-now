import React from 'react';
import { TeacherAIPdfDownload } from "./TeacherAIPdf";
import ReactMarkdown from 'react-markdown';
import '../markdown.css';
import { Brain, BookOpen, ArrowLeft, Download, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ResultsScreenProps {
  topic: string;
  content: string;
  onBack: () => void;
  onNewTopic: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ topic, content, onBack, onNewTopic }) => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold">TeacherAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <Button
              onClick={onNewTopic}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Novo Assunto
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Topic Header */}
          <div className="text-center mb-8">
            <BookOpen className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {topic}
            </h1>
            <p className="text-xl text-gray-300">
              Seu guia completo da ignorância à proficiência
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <TeacherAIPdfDownload topic={topic} content={content}>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar PDF
              </Button>
            </TeacherAIPdfDownload>
            <Button
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(content);
                  const btn = document.getElementById('copy-btn');
                  if (btn) {
                    const original = btn.innerHTML;
                    btn.innerHTML = '<span style="color:#fff">Copiado!</span>';
                    setTimeout(() => (btn.innerHTML = original), 1200);
                  }
                } catch (e) {
                  alert('Erro ao copiar para a área de transferência.');
                }
              }}
              id="copy-btn"
            >
              <Clipboard className="h-4 w-4 mr-2" />
              Copiar
            </Button>
          </div>

          {/* Content Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="prose max-w-none markdown-white">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>

          {/* Education Continuum Progress */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Seu Progresso no Education Continuum</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { phase: "Ignorância", status: "completed" },
                { phase: "Consciência", status: "current" },
                { phase: "Eficiência", status: "next" },
                { phase: "Proficiência", status: "future" }
              ].map((item, index) => (
                <div key={index} className={`p-4 rounded-lg text-center ${
                  item.status === 'completed' ? 'bg-green-500/20 border border-green-500' :
                  item.status === 'current' ? 'bg-purple-500/20 border border-purple-500' :
                  'bg-gray-500/20 border border-gray-500'
                }`}>
                  <div className="text-sm font-medium">{item.phase}</div>
                  <div className="text-xs mt-1">
                    {item.status === 'completed' && '✓ Concluído'}
                    {item.status === 'current' && '📍 Atual'}
                    {item.status === 'next' && '➡️ Próximo'}
                    {item.status === 'future' && '⏳ Futuro'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 text-center">
            <Button
              onClick={onNewTopic}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              Explorar Outro Assunto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
