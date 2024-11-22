import React, { useState } from 'react';
import biskatoIcon from '../assets/icon.png';
import { Button } from './ui/button';
import { FiMenu, FiX } from 'react-icons/fi';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md">
     
      <div className="flex items-center justify-between p-8 max-w-[1400px] mx-auto">


     

       
          <img
            src={biskatoIcon}
            alt="Biskato Icon"
            className="w-12 h-12"
            width={48}
            height={48}
            
          />
      

      
      
        <Button className="hidden md:block bg-violet-600 text-white">
          Instalar o app
        </Button>
        

        
        <button
          type="button"
          className="block md:hidden text-2xl text-zinc-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

     
      <nav
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-md transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 md:hidden`}
      >
        <div className="p-4">
         
        
           <Button className="block w-full bg-violet-600 text-white mb-4">
            Instalar o app
          </Button>
        

          
          <ul className="space-y-4">
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Design Gráfico
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Programação e Tecnologia
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Marketing Digital
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Redação e Tradução
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Música e Áudio
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Negócios
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Finanças
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Serviços de IA
              </button>
            </li>
          </ul>
        </div>
      </nav>

      
      <div className="hidden md:block border-b border-t border-zinc-300">
        <div className="px-4 py-2 flex justify-start items-center gap-8 max-w-[1400px] mx-auto">
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Design Gráfico
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Programação e Tecnologia
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Marketing Digital
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Redação e Tradução
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Música e Áudio
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Negócios
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Finanças
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Serviços de IA
          </button>
        </div>
      </div>
    </header>
  );
}
