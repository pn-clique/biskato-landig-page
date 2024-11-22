import React from "react";


type Category = string;

const categories: Category[] = [
  "Agente de Dropshipping",
  "Treinamento de Fortnite",
  "Serviços Online",
  "Moderador do Discord",
  "Comprar Twitch Overlay",
  "Treinamento de League Of Legends",
  "FiveM Mlo",
  "Treinamento de Valorant",
  "Modelo Vtuber",
  "Promoção de Spotify",
  "Servidor do Discord",
  "Sneaker Bot",
  "Avatar de Vrchat",
  "Criar Logo do Twitch",
  "Arte da Steam",
  "Design de logotipo 3D",
  "Consultoria de Publicidade para Facebook",
  "Imagens de Pixel Art",
  "Serviços de Marketing para Mídia Social",
  "Design de logotipo de assinatura",
  "Livro de Ghostwriter",
  "Publicidade para TikTok",
  "Design de Capa de Livro",
  "Diagrama de Circuito e Elétrico",
  "Criar Bot do Discord",
  "Gerente de YouTube",
  "Ghost Producer",
  "Visualização de Música",
];

const CategoriesPopulations: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <main className="w-full max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Navegue pelas nossas categorias mais populares
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-32">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-white text-gray-700 border border-gray-400 rounded-full px-4 py-2 text-sm font-bold hover:bg-black hover:text-white transition"
            >
              {category}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPopulations;
