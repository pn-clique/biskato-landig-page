export async function getTopPopularJobs() {
  await new Promise(reseolve => setTimeout(reseolve, 1000))

  return [
    {
      id: 'fa2fd82d-0219-5d2a-b56a-f21f4f0e6ec7',
      subtitle: 'Adicione talento à IA',
      title: 'Artistas de IA',
    },
    {
      id: 'edce8eb4-3663-50e1-bc5e-bc533217428f',
      subtitle: 'Personalize seu site',
      title: 'WordPress',
    },
    {
      id: '30947623-c17a-58ba-8242-302e5f7a630c',
      subtitle: 'Compartilhe sua mensagem',
      title: 'Locução',
    },
    {
      id: '590b9e41-f74e-57a2-9073-59d9e10c5a2f',
      subtitle: 'Envolva seu público',
      title: 'Vídeo Explicativo',
    },
    {
      id: '93663a56-c157-5077-bfca-530d79f76d61',
      subtitle: 'Crie sua marca',
      title: 'Logotipo',
    },
  ]
}
