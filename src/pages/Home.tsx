import {useSuspenseQuery} from '@tanstack/react-query'
import {Head} from '@/components/Head'

import FullScreenFadeCarousel from '@/components/Home/FullScreenFadeCarousel'
export function Home() {
	const slides = [
    {
      image: 'https://i.ibb.co/spjCWtR4/DJI-0157.jpg',
      title: 'Construindo mais que Estruturas',
      subtitle: 'Compromisso social em cada projeto',
      buttonText: 'Conheça nossos projetos sociais',
      buttonLink: '#projetos'
    },
    {
      image: 'https://i.ibb.co/hFXRy7bf/subesta-o-rib.jpg',
      title: 'Inovando com sustentabilidade',
      subtitle: 'Soluções inteligentes para o futuro',
      buttonText: 'Saiba mais',
      buttonLink: '#sobre'
    },
    {
      image: 'https://i.ibb.co/1tFd2smW/subesta-o-lins3.jpg',
      title: 'Excelência em cada obra',
      subtitle: 'Transformando ideias em realidade',
      buttonText: 'Ver portfólio',
      buttonLink: '#portfolio'
    }
  ]

	return (
		<>
			<Head title='Vitamin' />
			<main >
					<FullScreenFadeCarousel  slides={slides} headerHeight="0rem"/>
			</main>
		</>
	)
}
