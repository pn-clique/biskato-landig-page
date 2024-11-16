import biskatoIcon from '../assets/icon.png'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-8 max-w-[1400px] mx-auto border-t border-zinc-200 py-8">
      <img
        src={biskatoIcon}
        alt="Biskato Icon"
        className=""
        width={48}
        height={48}
      />

      <span className="text-zinc-600">
        Feito com ❤️ pela{' '}
        <a href="3" target="_blank" rel="noreferrer" className="underline">
          PN Clique
        </a>
      </span>
    </footer>
  )
}
