
import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  topic: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ topic }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <div className="relative">
            <Brain className="h-20 w-20 text-purple-400 mx-auto mb-6 animate-pulse" />
            <Sparkles className="h-8 w-8 text-pink-400 absolute -top-2 -right-2 animate-bounce" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Analisando: {topic}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Nossa IA está processando e criando o melhor conteúdo educacional para você...
          </p>
        </div>

        {/* Loading Steps */}
        <div className="space-y-4">
          {[
            "Compreendendo o conceito fundamental",
            "Simplificando explicações complexas",
            "Organizando o conhecimento",
            "Criando seu plano de aprendizado"
          ].map((step, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
              <span className="text-gray-300">{step}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Isso pode levar alguns segundos...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
