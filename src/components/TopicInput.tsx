
import React, { useState } from 'react';
import { Search, Sparkles, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TopicInputProps {
  onSubmit: (topic: string) => void;
  isLoading: boolean;
  onBack?: () => void;
}

const TopicInput: React.FC<TopicInputProps> = ({ onSubmit, isLoading, onBack }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit(topic.trim());
    }
  };

  const exampleTopics = [
    "Física Quântica",
    "Eletricidade",
    "Petróleo e Gás",
    "Administração",
    "Inteligência Artificial",
    "Blockchain"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Brain className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold">TeacherAI</span>
        </button>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Qual assunto você quer dominar?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Digite qualquer conceito técnico e nossa IA irá te guiar da ignorância à proficiência
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Ex: Física Quântica, Eletricidade, Administração..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                disabled={isLoading}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={!topic.trim() || isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processando...
                </>
              ) : (
                <>
                  Começar Aprendizado
                  <Sparkles className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          {/* Example Topics */}
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Exemplos de assuntos:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {exampleTopics.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setTopic(example)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-white/20 transition-all duration-200"
                  disabled={isLoading}
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicInput;
