import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  const faqs = [
    {
      question: "Por que devo contratar um freelancer?",
      answer:
        "Devido à crescente escassez de profissionais qualificados hoje em dia, está cada vez mais difícil encontrar trabalhadores competentes em tempo integral. Por esse motivo, cada vez mais empresas portuguesas estão trabalhando com freelancers que oferecem seus serviços online. Os sites de freelancers permitem que as empresas encontrem os especialistas certos de forma rápida e confiável para continuar competitivas no mercado atual. Por sua vez, cada vez mais autônomos preferem encontrar trabalhos freelance online, pois a administração é menor e a oferta de trabalho é maior. ",
    },
    {
      question: "O que torna a Fiverr diferente de outras plataformas?",
      answer:
        "Devido à crescente escassez de profissionais qualificados hoje em dia, está cada vez mais difícil encontrar trabalhadores competentes em tempo integral. Por esse motivo, cada vez mais empresas portuguesas estão trabalhando com freelancers que oferecem seus serviços online. Os sites de freelancers permitem que as empresas encontrem os especialistas certos de forma rápida e confiável para continuar competitivas no mercado atual. Por sua vez, cada vez mais autônomos preferem encontrar trabalhos freelance online, pois a administração é menor e a oferta de trabalho é maior..",
    },
    {
      question: "Quanto custa se inscrever na Fiverr?",
      answer:
        "A Fiverr é um portal onde você pode encontrar freelancers profissionais e experientes de mais de 500 áreas e indústrias. Seja em marketing de mídia social ou desenvolvimento na web, freelancers da Alemanha ou provedores internacionais, sejam projetos de longo ou curto prazo, na Fiverr você encontrará os especialistas certos para todas as suas necessidades. Inscrição fácil e gratuita, comunicação direta, pagamento seguro e suporte ao cliente 24 horas por dia.",
    },
    {
      question: "Como posso me comunicar com o freelancer?",
      answer:
        "Na Fiverr, a inscrição e criação de perfil são gratuitas. Para cada pedido, cobramos uma taxa de 5,5% sobre o preço de compra. Assim, cobrimos nossos custos administrativos e podemos garantir uma operação tranquila da nossa plataforma, além de proporcionar suporte ao cliente 24 horas por dia.",
    },
    {
      question: "Quais métodos de pagamento a Fiverr oferece?",
      answer:
        "Confiança e segurança são nossas prioridades principais. Queremos que você, cliente, tenha a melhor experiência possível e receba resultados perfeitos. Estamos aqui para ajudar com pedidos, pagamentos, privacidade ou qualidade de serviço.",
    },
    {
      question: "Como posso ter certeza de que estou recebendo pelo que paguei?",
      answer:
        "Vários métodos de pagamento estão disponíveis para usuários brasileiros na Fiverr, incluindo cartão de crédito, PayPal e Boleto. Todos esses métodos garantem transações rápidas, eficientes e seguras na plataforma.",
    },
    {
      question: "Com quem devo falar se tiver problemas com uma tarefa ou um freelancer?",
      answer:
        "Nosso suporte ao cliente está disponível 24 horas por dia. Em caso de problemas com pedidos, pagamentos, seu perfil ou outras dúvidas, basta entrar em contato com nossos especialistas de suporte.",
    },
    {
      question: "Também posso trabalhar com freelancers que falam português?",
      answer:
        "Sim, você pode filtrar os serviços facilmente por idioma e localização do freelancer. Primeiro, digite o serviço que você precisa no campo de pesquisa ou clique na categoria adequada no painel de navegação. Na próxima etapa, use a opção de idioma nos filtros para encontrar um expert que falam português. Se você quiser que o freelancer esteja localizado na Brasil, ative o botão de localização no lado direito.",
    },
  ];

  return (
    <div className="relative max-w-2xl w-full !mx-auto px-4 py-8 ml-5 mt-40 overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Perguntas frequentes</h1>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Questions;