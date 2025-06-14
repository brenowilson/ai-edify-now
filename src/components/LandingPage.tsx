
import React from 'react';
import { ArrowRight, Brain, BookOpen, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold">TeacherAI</span>
          </div>
          <Button 
            onClick={onGetStarted}
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transforme Ignorância em Proficiência
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Domine qualquer conceito técnico complexo com nosso framework de aprendizado baseado em IA
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
          >
            Começar Minha Jornada
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Education Continuum */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Education Continuum Framework</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { phase: "Ignorância", icon: "🤔", desc: "Você não sabe nada sobre o assunto" },
            { phase: "Consciência", icon: "💡", desc: "Você entende o panorama geral" },
            { phase: "Eficiência", icon: "🎯", desc: "Você domina as bases do conceito" },
            { phase: "Proficiência", icon: "🏆", desc: "Você pode ensinar outros" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.phase}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Explicação Simplificada</h3>
            <p className="text-gray-300">
              Transformamos conceitos complexos em explicações simples e acessíveis
            </p>
          </div>
          <div className="text-center">
            <Target className="h-12 w-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Aprendizado Sistemático</h3>
            <p className="text-gray-300">
              Framework estruturado que te leva da ignorância à proficiência
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Mentoria Inteligente</h3>
            <p className="text-gray-300">
              IA avançada que se adapta ao seu nível de conhecimento
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Pronto para Começar?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Digite qualquer assunto técnico e deixe nossa IA te guiar
        </p>
        <Button 
          onClick={onGetStarted}
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg"
        >
          Começar Agora
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/20">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 TeacherAI. Transformando conhecimento através da IA.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
