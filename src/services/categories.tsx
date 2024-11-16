import {
  CodeXmlIcon,
  Cookie,
  Flower2Icon,
  ImagesIcon,
  LanguagesIcon,
  MicIcon,
  PenBoxIcon,
  VideoIcon,
} from 'lucide-react'

export async function getCategories() {
  await new Promise(reseolve => setTimeout(reseolve, 1000))

  return [
    {
      id: '2d91bc67-93c0-505f-886e-4c11e65111ca',
      name: 'Logotipo',
      icon: <Flower2Icon className="text-zinc-600" size={32} />,
    },
    {
      id: 'e198b7a2-879b-5215-a3d4-f7ae2c9e19a4',
      name: 'Pasteleiros',
      icon: <Cookie className="text-zinc-600" size={32} />,
    },
    {
      id: '09df4197-aa17-5371-9daa-ff8cda2df185',
      name: 'Artistas de IA',
      icon: <ImagesIcon className="text-zinc-600" size={32} />,
    },
    {
      id: '779feee1-b73f-55d7-a6d3-076a005e9223',
      name: 'WordPress',
      icon: <CodeXmlIcon className="text-zinc-600" size={32} />,
    },
    {
      id: 'a762e2d8-7d0b-5e75-9953-739c86f2989d',
      name: 'Mídia Social',
      icon: <VideoIcon className="text-zinc-600" size={32} />,
    },
    {
      id: '2053b871-ee1f-57fe-afc7-8c8d6668ad2b',
      name: 'Locução',
      icon: <MicIcon className="text-zinc-600" size={32} />,
    },
    {
      id: '3c6fa076-9916-55e1-8bd4-999359abbb5a',
      name: 'Ilustração',
      icon: <PenBoxIcon className="text-zinc-600" size={32} />,
    },
    {
      id: 'f3ce7b7a-da59-5252-8f66-395dd34363a4',
      name: 'Traduções',
      icon: <LanguagesIcon className="text-zinc-600" size={32} />,
    },
  ]
}

// export const CATEGORIES =
