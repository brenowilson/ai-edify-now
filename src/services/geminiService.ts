
// GeminiService: Integrates with Google Gemini 2.0 Flash API or uses mock data if no API key is provided
// To use Gemini, set GEMINI_API_KEY in your .env file (see .env.example)

import { GoogleGenerativeAI } from "@google/generative-ai";

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
6 - What are the existing opportunities and the main sources of knowledge to accompany the subject through time. The opportunities must be specific to the market, in how they can use it to generate profit in some way. The main sources of knowledge must also be specific sources which the user can actually access directly from your response, and not a generic one where the user must Google or something like this.

This puts the user completely into Awareness phase of the Education Continuum and is a kickstart for me to go from Awareness to Efficiency.

To go to Efficiency phase, they must not only know about the subject, but they also need to fully understand, dominate and be capable to explain in a simple way to every single person. So, to be fully Efficient in the subject, they must learn through time, and the systematic learning steps you know and that were suggested earlier to give them everything about the subject and the sources to keep following every occurrence of it in the world, make them in track to reach the Efficiency phase.

To jump to Efficiency Phase to Proficiency Phase, they need to put in the practical work to learn and understand what happens in practice, giving them experiences in different situations and master Proficiency.

They know that they reached Proficiency in a subject if they can mentor anyone through the process of the subject successfully.

You'll teach in portuguese language of the user's prompt.`,

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
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("VITE_GEMINI_API_KEY not found. Please set it in your .env file.");
    }
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `${this.PROMPTS.INITIAL}\n\nTopic: ${topic}`;
      const result = await model.generateContent(prompt);
      const content = result.response.text();
      if (!content) throw new Error("No content returned from Gemini");
      console.log("Learning content generated successfully from Gemini");
      return content;
    } catch (error) {
      console.error("Gemini API error:", error);
      throw new Error("Failed to generate content from Gemini API.");
    }
  }


}
