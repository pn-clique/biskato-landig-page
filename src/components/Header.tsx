import { useState } from 'react'
import biskatoIcon from '../assets/icon.png'
import { Button } from './ui/button'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md">
      <div className="flex items-center justify-between p-8 max-w-[1400px] mx-auto">
        <div className="flex gap-x-3 items-center">
        <img
          src={biskatoIcon}
          alt="Biskato Icon"
          className="w-12 h-12"
          width={48}
          height={48}
        />
        <span className='text-3xl font-bold text-violet-900'>Biskato</span>
        </div>

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
                Assistentes Virtuais de Alto Nível
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Personal Trainers e Consultores de Bem-Estar
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Chefes de Cozinha e Consultores Culinários
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg border-b-2 border-transparent hover:border-violet-600">
                Técnico de Eletricidade
              </button>
            </li>
            <li>
              <button className="text-zinc-600 font-medium text-lg text-left border-b-2 border-transparent hover:border-violet-600">
                Consultoria em Investimentos e Finanças Pessoais
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
            className="text-zinc-600 font-medium text-sm py-1 border-b-2 border-transparent hover:border-violet-600"
          >
           Assistentes Virtuais de Alto Nível
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-sm py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Personal Trainers e Consultores de Bem-Estar
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-sm py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Chefes de Cozinha e Consultores Culinários
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-sm py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Técnico de Eletricidade
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-sm py-1 border-b-2 border-transparent hover:border-violet-600"
          >
            Consultoria em Investimentos e Finanças Pessoais
          </button>
        </div>
      </div>
    </header>
  )
}
