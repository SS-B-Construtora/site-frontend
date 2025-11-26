import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import FullScreenFadeCarousel from '@/components/Home/FullScreenFadeCarousel';
import PortfolioLinkSection from '@/components/Home/PortfolioLinkSection';
import NewsCarousel from '@/components/Home/NewsCarousel';
import ContactSection from '@/components/Home/ContactSection';

import imagem1 from '@/assets/mainCarousel/imagem1.svg';
import imagem2 from '@/assets/mainCarousel/imagem2.svg';
import imagem3 from '@/assets/mainCarousel/imagem3.svg';
import imagem4 from '@/assets/mainCarousel/imagem4.svg';
import imagem5 from '@/assets/mainCarousel/imagem5.svg';
import FooterSection from '@/components/Home/FooterSection';

export function Home() {
  const slides = [
    {
      image: imagem1,
      title: (
        <span style={{ lineHeight: '1', display: 'block' }}>
          <span className="text-[#00FF7D] block mb-1">Construindo</span>
          <span className="text-white block mb-1">mais que</span>
          <span className="text-[#00FF7D] block">Estruturas</span>
        </span>
      ),
      subtitle: (
        <span style={{ lineHeight: '0.9' }} className='font-bold'>
          Compromisso social
          <br />
          em cada projeto
        </span>
      ),
      buttonText: 'CONHEÇA NOSSOS PROJETOS SOCIAIS',
      buttonLink: '#projetos',
    },
    {
      image: imagem2,
      title: (
        <span style={{ lineHeight: '1', display: 'block' }}>
          <span className="text-white block mb-1">Ventos que</span>
          <span className="text-[#00FF7D] block">Transformam</span>
        </span>
      ),
      subtitle: (
        <span style={{ lineHeight: '0.9' }} className='font-bold'>
          Sustentabilidade <br /> em movimento
        </span>
      ),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#sobre',
    },
    {
      image: imagem3,
      title: (
        <span style={{ lineHeight: '1', display: 'block' }}>
          <span className="text-white block mb-1">Construindo o</span>
          <span className="text-[#00FF7D] block">Futuro Industrial</span>
        </span>
      ),
      subtitle: (
        <span style={{ lineHeight: '0.9' }} className='font-bold'>
          Aplicando expertise e dedicação em <br /> cada etapa dos nossos
          projetos de <br />
          Parques Industriais
        </span>
      ),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#portfolio',
      secondButtonText: 'VEJA NOSSO CATÁLOGO',
      secondButtonLink: '#portfolio',
    },
    {
      image: imagem4,
      title: (
        <span style={{ lineHeight: '1', display: 'block' }}>
          <span className="text-white block mb-1">Transformando</span>
          <span className="text-[#00FF7D] block">Paisagens</span>
        </span>
      ),
      subtitle: (
        <span style={{ lineHeight: '0.9' }} className='font-bold'>
          Conheça nossa experiência <br /> em Terraplanagem
        </span>
      ),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#portfolio',
      secondButtonText: 'VEJA NOSSO CATÁLOGO',
      secondButtonLink: '#portfolio',
    },
    {
      image: imagem5,
      title: (
        <span style={{ lineHeight: '1', display: 'block' }}>
          <span className="text-white block mb-1">Caminhos que</span>
          <span className="text-white block">Conduzem ao</span>
          <span className="text-[#00FF7D] block">Futuro Industrial</span>
        </span>
      ),
      subtitle: (
        <span style={{ lineHeight: '0.9' }} className='font-bold'>
          Experiência e qualidade na construção <br /> de Obras Rodoviárias
        </span>
      ),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#portfolio',
      secondButtonText: 'VEJA NOSSO CATÁLOGO',
      secondButtonLink: '#portfolio',
    },
  ];

  return (
    <>
      <SocialMediaSidebar />
      <Head title="SS&B - Construtora" />
      <main>
        <FullScreenFadeCarousel slides={slides} />
        <PortfolioLinkSection />
        <NewsCarousel />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
