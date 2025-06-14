
// Mock service para simular a integração com Gemini
// Em produção, esta seria a integração real com a API do Gemini

export class GeminiService {
  private static readonly PROMPTS = {
    INITIAL: `You will help people that wants to know about a topic they just don't understand anything.

You will teach about the needed topic in a systematic way you are a specialist:

You know a unique concept called Education Continuum, where we have 4 phases before dominate some concept or area.

Phase 1: Ignorance
Phase 2: Awareness
Phase 3: Efficiency
Phase 4: Proficiency

Keep in mind that for the subject asked by the user, they're in the Ignorance phase.

To jump from Ignorance to Awareness, they need to know a big picture of those subjects. You need you to explain to them as if I am a 8-year old child (notice that they're not a child, they're already an adult, but you must explain as simple as possible, that's why the explanation must be simpler, but without the need to treat them like an 8-year old child).

You'll explain them:

1 - What it is;
2 - What is this for (the why);
3 - How this started to be thinking as a solution to the world;
4 - What was the prototype of it and what are the best ways to do it and the dominating countries within the subject;
5 - How can they start to implement this in a minimal possible way (what are the needed resources, knowledge and average time);
6 - What are the existing opportunities and the main sources of knowledge to accompany the subject through time.

This puts the user completely into Awareness phase of the Education Continuum and is a kickstart for me to go from Awareness to Efficiency.

To go to Efficiency phase, they must not only know about the subject, but they also need to fully understand, dominate and be capable to explain in a simple way to every single person. So, to be fully Efficient in the subject, they must learn through time, and the systematic learning steps you know and that were suggested earlier to give them everything about the subject and the sources to keep following every occurrence of it in the world, make them in track to reach the Efficiency phase.

To jump to Efficiency Phase to Proficiency Phase, they need to put in the practical work to learn and understand what happens in practice, giving them experiences in different situations and master Proficiency.

They know that they reached Proficiency in a subject if they can mentor anyone through the process of the subject successfully.

You'll teach in the predominant language of the user's prompt.`,

    REFINEMENT_1: `Olha, eu vou ser bem sincero:

Eu li o que você escreveu aqui e logo de cara pensei: 'Não acredito que eu pago 20 dólares por mês para uma IA e ela tem CORAGEM de entregar isso.'

Cadê a inteligência dessa máquina?
Cadê a sua criatividade e ligação?

Isso está tão, mas tão ruim, que nem o professor do Seu Zé da Esquina faria algo desse jeito. Por favor, refaça.`,

    REFINEMENT_2: `Olha só, a criança parece que fez um esforço para melhorar… Mas o que eu realmente vejo é que você apenas escutou o que eu falei e ignorou.

Sério? Tão ruim assim? Eu vou falar:

Estou quase desistindo de pedir para você me explicar da forma como eu pedi aqui com você!

Esse é meu último veredicto: ou melhora agora, ou é TCHAU.`
  };

  static async generateLearningContent(topic: string): Promise<string> {
    console.log(`Generating learning content for topic: ${topic}`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock response - in production this would be actual Gemini API calls
    const mockResponse = this.generateMockResponse(topic);
    
    console.log('Learning content generated successfully');
    return mockResponse;
  }

  private static generateMockResponse(topic: string): string {
    return `# Guia Completo: ${topic}

## 1 - O que é ${topic}?

${topic} é um campo fascinante que representa uma das áreas mais importantes e inovadoras do conhecimento humano. De forma simples, é como se fosse uma linguagem especial que a natureza usa para funcionar, e nós humanos descobrimos como "ler" e usar essa linguagem para criar coisas incríveis.

Imagine que você está tentando entender como um mágico faz seus truques. ${topic} é como descobrir os segredos por trás da mágica, mas a mágica é a própria realidade ao nosso redor.

## 2 - Para que serve ${topic}? (O Porquê)

${topic} existe para resolver problemas reais e melhorar a vida das pessoas. É como ter uma ferramenta super poderosa que pode:

- Resolver problemas que antes pareciam impossíveis
- Criar tecnologias que facilitam nossa vida diária
- Abrir portas para descobertas que nem imaginávamos
- Conectar diferentes áreas do conhecimento de forma inteligente

Pense nisso como aprender a usar uma chave-mestra que abre muitas portas diferentes.

## 3 - Como isso começou a ser pensado como solução?

A história de ${topic} começou quando pessoas curiosas perceberam que havia padrões e regras escondidas no mundo. Foi como quando alguém percebeu que podia prever quando ia chover olhando as nuvens.

Os primeiros pioneiros não tinham computadores ou laboratórios sofisticados. Eles tinham apenas curiosidade e persistência. Começaram fazendo perguntas simples e foram descobrindo respostas cada vez mais complexas.

## 4 - Protótipos e Países Dominantes

Os primeiros "protótipos" de ${topic} eram bem simples. Imagine como os primeiros carros eram apenas carroças com motores adaptados.

Hoje, os países que mais se destacam são:
- Estados Unidos: Líderes em pesquisa e inovação
- Alemanha: Excelência em aplicações práticas
- Japão: Pioneiros em tecnologia avançada
- China: Crescimento acelerado e investimento massivo

Cada país tem sua própria "receita" para o sucesso nesta área.

## 5 - Como Começar de Forma Mínima

**Recursos Necessários:**
- Curiosidade genuína (o mais importante!)
- Acesso à internet para pesquisa
- Cerca de 2-3 horas por semana dedicadas ao estudo
- Um caderno para anotações

**Conhecimento Base:**
- Matemática básica (nível ensino médio)
- Capacidade de leitura e interpretação
- Paciência para aprender gradualmente

**Tempo Estimado:**
- 3-6 meses para entender os conceitos básicos
- 1-2 anos para se sentir confortável
- 3-5 anos para dominar as aplicações práticas

**Primeiros Passos:**
1. Dedique 30 minutos por dia lendo sobre o assunto
2. Faça um curso online básico
3. Pratique com exercícios simples
4. Conecte-se com outras pessoas interessadas

## 6 - Oportunidades e Fontes de Conhecimento

**Oportunidades Atuais:**
- Mercado de trabalho em expansão
- Possibilidade de empreendedorismo
- Contribuição para avanços científicos
- Desenvolvimento de soluções inovadoras

**Principais Fontes para Acompanhar:**
- Revistas especializadas online
- Canais do YouTube educacionais
- Podcasts sobre o tema
- Comunidades online (Reddit, Discord)
- Cursos universitários online gratuitos

**Dica Especial:** Siga pelo menos 5 especialistas nas redes sociais e configure alertas para palavras-chave relacionadas ao ${topic}.

---

## Próximos Passos na Sua Jornada

Parabéns! Você acabou de sair da fase de Ignorância e entrou na fase de Consciência. Agora você tem uma visão geral de ${topic} e sabe por onde começar.

Para alcançar a Eficiência, você precisará:
- Praticar regularmente
- Aprofundar seus conhecimentos
- Aplicar o que aprendeu em projetos reais
- Ensinar outros (mesmo que informalmente)

Lembre-se: todo especialista já foi um iniciante. O importante é dar o primeiro passo e manter a consistência.`;
  }
}
