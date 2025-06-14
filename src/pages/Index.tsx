
import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import TopicInput from '@/components/TopicInput';
import LoadingScreen from '@/components/LoadingScreen';
import ResultsScreen from '@/components/ResultsScreen';
import { GeminiService } from '@/services/geminiService';
import { useToast } from '@/hooks/use-toast';

type AppState = 'landing' | 'input' | 'loading' | 'results';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [currentTopic, setCurrentTopic] = useState('');
  const [learningContent, setLearningContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetStarted = () => {
    setAppState('input');
  };

  const handleTopicSubmit = async (topic: string) => {
    setCurrentTopic(topic);
    setIsLoading(true);
    setAppState('loading');

    try {
      console.log('Starting learning content generation for:', topic);
      const content = await GeminiService.generateLearningContent(topic);
      setLearningContent(content);
      setAppState('results');
      
      toast({
        title: "Conteúdo Gerado com Sucesso!",
        description: `Seu guia completo sobre ${topic} está pronto.`,
      });
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Erro ao Gerar Conteúdo",
        description: "Houve um problema ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
      setAppState('input');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setAppState('input');
  };

  const handleNewTopic = () => {
    setCurrentTopic('');
    setLearningContent('');
    setAppState('input');
  };

  const renderCurrentScreen = () => {
    switch (appState) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'input':
        return <TopicInput onSubmit={handleTopicSubmit} isLoading={isLoading} />;
      case 'loading':
        return <LoadingScreen topic={currentTopic} />;
      case 'results':
        return (
          <ResultsScreen
            topic={currentTopic}
            content={learningContent}
            onBack={handleBack}
            onNewTopic={handleNewTopic}
          />
        );
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return renderCurrentScreen();
};

export default Index;
