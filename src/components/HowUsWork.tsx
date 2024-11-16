import { ListTodoIcon, MonitorCheck, SearchCheckIcon } from 'lucide-react'

export default function HowUsWork() {
  return (
    <div className="mt-20 flex flex-col gap-14 justify-center items-center">
      <h2 className="text-4xl font-bold text-zinc-600">
        Como o <span className="text-violet-900 italic">Biskatos</span> funciona
      </h2>

      <div className="flex flex-wrap gap-20 justify-center xl:justify-between items-center">
        <div className="flex flex-col gap-4 items-center justify-center max-w-[400px] w-full">
          <SearchCheckIcon size={64} className="text-violet-600" />
          <span className="text-2xl text-zinc-600 font-medium">
            Pesquisa simples
          </span>
          <span className="text-zinc-500 text-center">
            Busque por um serviço usando a barra de pesquisa ou encontre uma
            categoria adequada no menu de navegação.
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center max-w-[400px] w-full">
          <ListTodoIcon size={64} className="text-violet-600" />
          <span className="text-2xl text-zinc-600 font-medium">
            Seleção simples
          </span>
          <span className="text-zinc-500 text-center">
            Escolha um serviço com base em classificações, nível e avaliações ou
            use opções de filtro como "Freelancer fala português".
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center max-w-[400px] w-full">
          <MonitorCheck size={64} className="text-violet-600" />
          <span className="text-2xl text-zinc-600 font-medium">
            Pagamento facilitado
          </span>
          <span className="text-zinc-500 text-center">
            Contrate um freelancer com facilidade e segurança, pagamentos
            protegidos, comunicação direta e entregas no prazo.
          </span>
        </div>
      </div>
    </div>
  )
}
