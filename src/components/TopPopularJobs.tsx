import { useQuery } from '@tanstack/react-query'
import { getTopPopularJobs } from '../services/getTopPopularJobs'

export default function TopPopularJobs() {
  const { data } = useQuery({
    queryKey: ['getTopPopularJobs'],
    queryFn: getTopPopularJobs,
  })

  return (
    <div className="mt-40 max-w-[1400px] mx-auto flex flex-col gap-6 px-4 xl:px-0">
      <h2 className="text-2xl from-zinc-600 font-bold">
        Top 5 Biskatos Populares
      </h2>

      <div className="w-full flex gap-6 items-center justify-evenly lg:justify-between flex-wrap">
        {data?.map(item => (
          <div
            key={item.id}
            className="relative bg-violet-900 w-[254px] h-[345px] rounded-lg overflow-hidden"
          >
            <div className="p-6 bg-black opacity-45 absolute top-0 bottom-0 w-full z-10 hover:opacity-30" />
            <div className="relative p-4 z-20">
              <span className="text-zinc-200">{item.subtitle}</span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
