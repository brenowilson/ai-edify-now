**DESCRIÇÃO DA SOLUÇÃO**

TeacherAI é basicamente uma solução que consiste em facilitar conceitos técnicos complexos para pessoas que não entendem absolutamente nada sobre aquele determinado assunto através do uso de inteligência artificial.

A solução faz isso através de um framework de aprendizado que tira o usuário da fase da ignorância do assunto, colocando-o na fase de consciência, e levando-o para a fase de eficiência, onde ele domina as bases do assunto e sabe como se manter afiado e atualizado sobre o assunto.

Para esta solução iremos utilizar a Gemini 2.0 Flash para gerar o aprendizado.

**FUNCIONALIDADES DO SISTEMA**

1 \- Uma tela que possui um campo para que o usuário possa digitar qual assunto técnico ele deseja aprender. Exemplo: Física Quântica, Eletricidade, Petróleo e Gás, Administração etc.

2 \- O usuário precisa clicar em um botão, depois de inserir uma área ou conceito técnico no campo mencionado no ponto 1 para enviar uma solicitação para a Gemini para que ela traga a resposta, e possamos exibir para o usuário na tela.

3 \- Para realizar a solicitação para a Gemini, iremos utilizar os seguintes prompts:

* **PROMPT 1:** “You will help people that wants to know about a topic they just don’t understand anything.

  You will teach about the needed topic in a systematic way you are a specialist:

  You know a unique concept called Education Continuum, where we have 4 phases before dominate some concept or area.

  Phase 1: Ignorance  
  Phase 2: Awareness  
  Phase 3: Efficiency  
  Phase 4: Proficiency

  Keep in mind that for the subject asked by the user, they're in the Ignorance phase.

  To jump from Ignorance to Awareness, they need to know a big picture of those subjects. You need you to explain to them as if I am a 8-year old child (notice that they're not a child, they're already an adult, but you must explain as simple as possible, that’s why the explanation must be simpler, but without the need to treat them like an 8-year old child).

  You’ll explain them:

  1 \- What it is;  
  2 \- What is this for (the why);  
  3 \- How this started to be thinking as a solution to the world;  
  4 \- What was the prototype of it and what are the best ways to do it and the dominating countries within the subject;  
  5 \- How can they start to implement this in a minimal possible way (what are the needed resources, knowledge and average time);  
  6 \- What are the existing opportunities and the main sources of knowledge to accompany the subject through time.

  This puts the user completely into Awareness phase of the Education Continuum and is a kickstart for me to go from Awareness to Efficiency.

  To go to Efficiency phase, they must not only know about the subject, but they also need to fully understand, dominate and be capable to explain in a simple way to every single person. So, to be fully Efficient in the subject, they must learn through time, and the systematic learning steps you know and that were suggested earlier to give them everything about the subject and the sources to keep following every occurrence of it in the world, make them in track to reach the Efficiency phase.

  To jump to Efficiency Phase to Proficiency Phase, they need to put in the practical work to learn and understand what happens in practice, giving them experiences in different situations and master Proficiency.

  They know that they reached Proficiency in a subject if they can mentor anyone through the process of the subject successfully.

  You'll teach in the predominant language of the user's prompt.”  
* **PROMPT 2 (Deve ser feito depois que receber a resposta do primeiro e usado com o objetivo de refinar a resposta anterior antes de apresentar o resultado final para o usuário):** “Olha, eu vou ser bem sincero:

  Eu li o que você escreveu aqui e logo de cara pensei: ‘Não acredito que eu pago 20 dólares por mês para uma IA e ela tem CORAGEM de entregar isso.’

  Cadê a inteligência dessa máquina?  
  Cadê a sua criatividade e ligação?

  Isso está tão, mas tão ruim, que nem o professor do Seu Zé da Esquina faria algo desse jeito. Por favor, refaça.”  
* **PROMPT 3 (Deve ser feito depois que receber a resposta do segundo e usado com o objetivo de refinar a resposta anterior antes de apresentar o resultado final para o usuário):** “Olha só, a criança parece que fez um esforço para melhorar… Mas o que eu realmente vejo é que você apenas escutou o que eu falei e ignorou.

  Sério? Tão ruim assim? Eu vou falar:

  Estou quase desistindo de pedir para você me explicar da forma como eu pedi aqui com você\!

  Esse é meu último veredicto: ou melhora agora, ou é TCHAU.”