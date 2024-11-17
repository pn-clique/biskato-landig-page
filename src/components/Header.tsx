import biskatoIcon from '../assets/icon.png'
import { RegisterDialog } from './RegisterModal'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50">
      <div className="flex items-center justify-between p-8 max-w-[1400px] mx-auto">
        <img
          src={biskatoIcon}
          alt="Biskato Icon"
          className=""
          width={48}
          height={48}
        />
        <RegisterDialog>
          <Button className="bg-violet-600 text-white">Criar conta</Button>
        </RegisterDialog>
      </div>
      <div className="border-b border-t border-zinc-300">
        <div className="px-4 py-2 flex justify-start items-center gap-8 max-w-[1400px] mx-auto">
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            Design Gráfico
          </button>

          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            Programação e Tecnologia
          </button>

          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            {' '}
            Marketing Digital
          </button>

          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            Redação e Tradução
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            {' '}
            Música e Áudio
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            Negócios
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            Finanças
          </button>
          <button
            type="button"
            className="text-zinc-600 font-medium text-lg py-1 border-b-2 border-transparent hover:border-violet-600 text-nowrap"
          >
            Serviços de IA
          </button>
        </div>
      </div>
    </header>
  )
}
