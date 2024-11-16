import { CheckCircle2Icon } from 'lucide-react'
import biskatoIcon from '../assets/icon.png'

export default function About() {
  return (
    <div className="bg-violet-100 py-32 mt-20 w-full">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row px-8 xl:px-0 gap-8 justify-between items-center">
        <div className="flex flex-col gap-8 max-w-[547px] w-full">
          <h2 className="text-4xl font-bold text-zinc-600">
            Freelancers competentes para todas as áreas – a apenas um clique de
            distância
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <CheckCircle2Icon className="text-zinc-600" />
                <span className="text-zinc-600 text-xl font-medium">
                  Trabalho de qualidade - eficiente e confiável
                </span>
              </div>
              <span className="text-zinc-600 text-lg">
                Receba entregas pontuais e de alta qualidade, seja um trabalho
                de curto prazo ou um projeto complexo.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <CheckCircle2Icon className="text-zinc-600" />
                <span className="text-zinc-600 text-xl font-medium">
                  Segurança em cada pedido
                </span>
              </div>
              <span className="text-zinc-600 text-lg">
                Pagamentos protegidos pela tecnologia SSL. As transações só são
                liberadas quando a entrega é aprovada.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <CheckCircle2Icon className="text-zinc-600" />
                <span className="text-zinc-600 text-xl font-medium">
                  Local ou global
                </span>
              </div>
              <span className="text-zinc-600 text-lg">
                Trabalhe com especialistas que falam português ou talentos
                internacionais, dependendo da suas preferência e requisitos.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <CheckCircle2Icon className="text-zinc-600" />
                <span className="text-zinc-600 text-xl font-medium">
                  24 horas por dia - suporte ininterrupto
                </span>
              </div>
              <span className="text-zinc-600 text-lg">
                Perguntas? Nossa equipe de suporte está disponível o tempo todo
                – a qualquer hora e em qualquer lugar.
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img
            src={biskatoIcon}
            alt="Biskato icon"
            className="max-w-[312px] h-[312px] md:max-w-max md:h-[512]"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  )
}
