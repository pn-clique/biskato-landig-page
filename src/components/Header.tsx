import React, { useState } from 'react';
import biskatoIcon from '../assets/icon.png';
import { RegisterDialog } from './RegisterModal';
import { Button } from './ui/button';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md">
      {/* Header principal */}
      <div className="flex items-center justify-between p-8 max-w-[1400px] mx-auto">
        {/* Logo */}
        <img
          src={biskatoIcon}
          alt="Biskato Icon"
          className="w-12 h-12"
          width={48}
          height={48}
        />

        {/* Botão Criar Conta */}
        <RegisterDialog>
          <Button className="hidden md:block bg-violet-600 text-white">
            Criar conta
          </Button>
        </RegisterDialog>

        {/* Botão do Menu Mobile */}
        <button
          type="button"
          className="block md:hidden text-2xl text-zinc-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile Lateral */}
      <nav
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-md transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 md:hidden`}
      >
        <div className="p-4">
          {/* Botão Criar Conta no Menu Mobile */}
          <RegisterDialog>
            <Button className="block w-full bg-violet-600 text-white mb-4">
              Criar conta
            </Button>
          </RegisterDialog>

          {/* Links do Menu */}
          <ul className="space-y-4">
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Design Gráfico
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Programação e Tecnologia
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Marketing Digital
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Redação e Tradução
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Música e Áudio
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Negócios
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Finanças
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg">
                Serviços de IA
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menu Desktop */}
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
