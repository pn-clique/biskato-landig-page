import { RegisterDialog } from './RegisterModal'

export default function RegisterNow() {
  return (
    <div className="max-w-[1400px] bg-violet-900 mt-20 mx-auto flex items-center gap-10 sm:bg-hero-pattern bg-center bg-cover mb-40 h-[470px] rounded-xl">
      <div className="px-10">
        <h2 className="text-5xl text-white max-w-[581px] leading-tight font-bold">
          <span className="italic font-normal">Especialistas qualificados</span>{' '}
          <br />
          para projetos de qualquer tipo e tamanho.
        </h2>
        <RegisterDialog>
          <button
            type="button"
            className="bg-white text-violet-600 h-12 rounded-md px-6 mt-8"
          >
            Comece agora
          </button>
        </RegisterDialog>
      </div>
    </div>
  )
}
