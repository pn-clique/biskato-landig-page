import { SearchIcon } from 'lucide-react'
import { useRef } from 'react'

export default function Banner() {
  const searchRef = useRef()


  return (
    <div className="mt-60 md:mt-52 xl:mt-44 bg-violet-900 mx-6 rounded-xl h-[520px] p-6 flex flex-col gap-14 justify-center items-center">
      <h1 className="text-5xl md:text-6xl leading-tight text-white sm:max-w-4xl text-center italic font-normal">
        Encontre o{' '}
        <span className="text-violet-400 font-bold">serviço freelance</span>{' '}
        ideal imediatamente
      </h1>
      <div className="max-w-[600px] hidden w-full flex-col md:flex-row justify-center items-center gap-4">
        <input
          ref={searchRef.current}
          type="search"
          name="search"
          placeholder="O que voçê está procurando? Ex: Barbeiro"
          className="h-11 border-0 rounded-md w-full px-4"
        />
        <button
          type="button"
          className="bg-violet-600 h-11 w-full md:w-auto rounded-md px-4 hover:bg-violet-700 transition-all"
        >
          <SearchIcon className="text-white" />
        </button>
      </div>
    </div>
  )
}
