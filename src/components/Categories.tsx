import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/categories'
import { Suspense } from 'react'
import { LoaderIcon } from 'lucide-react'

export default function Categories() {
  const { data } = useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories,
  })

  function LoadingCategory() {
    return (
      <div className="flex flex-col gap-4 items-center mx-auto justify-center p-8 rounded-lg bg-white hover:shadow-lg">
        <LoaderIcon />
        <span className="text-zinc-600 font-medium text-lg text-nowrap">
          Carregando..
        </span>
      </div>
    )
  }

  return (
    <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-10 items-center mt-8">
      <Suspense fallback={<LoadingCategory />}>
        {data?.map(category => (
          <div
            key={category.id}
            className="flex flex-col gap-4 items-center justify-center p-6 rounded-lg bg-white hover:shadow-lg"
          >
            {category.icon}
            <span className="text-zinc-600 font-medium text-lg text-nowrap">
              {category.name}
            </span>
          </div>
        ))}
      </Suspense>
    </div>
  )
}
