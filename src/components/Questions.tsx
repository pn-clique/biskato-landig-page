import React, { useState } from 'react';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'Por que devo contratar um freelancer?', answer: 'Devido à crescente escassez de profissionais qualificados hoje em dia, está cada vez mais difícil encontrar trabalhadores competentes em tempo integral. Por esse motivo, cada vez mais empresas portuguesas estão trabalhando com freelancers que oferecem seus serviços online. Os sites de freelancers permitem que as empresas encontrem os especialistas certos de forma rápida e confiável para continuar competitivas no mercado atual. Por sua vez, cada vez mais autônomos preferem encontrar trabalhos freelance online, pois a administração é menor e a oferta de trabalho é maior. ' },
    { question: 'O que torna a Fiverr diferente de outras plataformas?', answer: 'Devido à crescente escassez de profissionais qualificados hoje em dia, está cada vez mais difícil encontrar trabalhadores competentes em tempo integral. Por esse motivo, cada vez mais empresas portuguesas estão trabalhando com freelancers que oferecem seus serviços online. Os sites de freelancers permitem que as empresas encontrem os especialistas certos de forma rápida e confiável para continuar competitivas no mercado atual. Por sua vez, cada vez mais autônomos preferem encontrar trabalhos freelance online, pois a administração é menor e a oferta de trabalho é maior..' },
    { question: 'Quanto custa se inscrever na Fiverr?', answer: 'A Fiverr é um portal onde você pode encontrar freelancers profissionais e experientes de mais de 500 áreas e indústrias. Seja em marketing de mídia social ou desenvolvimento na web, freelancers da Alemanha ou provedores internacionais, sejam projetos de longo ou curto prazo, na Fiverr você encontrará os especialistas certos para todas as suas necessidades. Inscrição fácil e gratuita, comunicação direta, pagamento seguro e suporte ao cliente 24 horas por dia.' },
    { question: 'Como posso me comunicar com o freelancer?', answer: 'Na Fiverr, a inscrição e criação de perfil são gratuitas. Para cada pedido, cobramos uma taxa de 5,5% sobre o preço de compra. Assim, cobrimos nossos custos administrativos e podemos garantir uma operação tranquila da nossa plataforma, além de proporcionar suporte ao cliente 24 horas por dia.' },
    { question: 'Quais métodos de pagamento a Fiverr oferece?', answer: 'Confiança e segurança são nossas prioridades principais. Queremos que você, cliente, tenha a melhor experiência possível e receba resultados perfeitos. Estamos aqui para ajudar com pedidos, pagamentos, privacidade ou qualidade de serviço.' },
    { question: 'Como posso ter certeza de que estou recebendo pelo que paguei?', answer: 'Vários métodos de pagamento estão disponíveis para usuários brasileiros na Fiverr, incluindo cartão de crédito, PayPal e Boleto. Todos esses métodos garantem transações rápidas, eficientes e seguras na plataforma.' },
    { question: 'Com quem devo falar se tiver problemas com uma tarefa ou um freelancer?', answer: 'Nosso suporte ao cliente está disponível 24 horas por dia. Em caso de problemas com pedidos, pagamentos, seu perfil ou outras dúvidas, basta entrar em contato com nossos especialistas de suporte.' },
    { question: 'Também posso trabalhar com freelancers que falam português?', answer: 'Sim, você pode filtrar os serviços facilmente por idioma e localização do freelancer. Primeiro, digite o serviço que você precisa no campo de pesquisa ou clique na categoria adequada no painel de navegação. Na próxima etapa, use a opção de idioma nos filtros para encontrar um expert que falam português. Se você quiser que o freelancer esteja localizado na Brasil, ative o botão de localização no lado direito.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ml-5 mt-20 " >
      <h1 className="text-2xl md:text-3xl font-bold mb-6 ">
        Perguntas frequentes
      </h1>
      <div className="space-y-4 overflow-x-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 md:w-170 max-lg:border-none">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between   w-full py-4  text-left text-gray-700 font-medium focus:outline-none"
            >
              {faq.question}
              <span className="absolute right-20 max-md:hidden">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 text-sm md:text-base mt-2 ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
;
export default Questions;
