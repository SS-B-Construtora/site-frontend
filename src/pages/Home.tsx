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
        <>
          Construindo <br /> mais que <br />
          <span className="text-[#00FF7D]">Estruturas</span>
        </>
      ),
      subtitle: (
        <>
          Compromisso social
          <br />
          em cada projeto
        </>
      ),
      buttonText: 'CONHECA NOSSOS PROJETOS SOCIAIS',
      buttonLink: '#projetos',
    },
    {
      image: imagem2,
      title: (
        <>
          <span className="text-white">
            Ventos que <br />{' '}
          </span>
          <span className="text-[#00FF7D]">Transformam</span>
        </>
      ),
      subtitle: (
        <>
          Sustentabilidade <br /> em movimento
        </>
      ),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#sobre',
    },
    {
      image: imagem3,
      title: (
        <>
          Construindo o <br />
          <span className="text-[#00FF7D]">Futuro Industrial</span>
        </>
      ),
      subtitle: (
        <>
          Aplicando expertise e dedicação em <br /> cada etapa dos nossos
          projetos de <br />
          Parques Industriais
        </>
      ),

      buttonText: 'QUERO CONHECER',
      buttonLink: '#portfolio',
      secondButtonText: 'VEJA NOSSO CATALOGO',
      secondButtonLink: '#portfolio',
    },
    {
      image: imagem4,
      title: (
        <>
          Transformando <br /> <span className="text-[#00FF7D]">Paisagens</span>
        </>
      ),
      subtitle: (<>Conheça nossa experiência <br /> em Terraplanagem</>),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#portfolio',
      secondButtonText: 'VEJA NOSSO CATALOGO',
      secondButtonLink: '#portfolio',
    },
    {
      image: imagem5,
      title: (
        <>
          Caminhos que <br /> conduzem ao{' '} <br />
          <span className="text-[#00FF7D]">progresso</span>
        </>
      ),
      subtitle: (<>Experiência e qualidade na construção <br /> de Obras Rodoviárias</>),
      buttonText: 'QUERO CONHECER',
      buttonLink: '#portfolio',
      secondButtonText: 'VEJA NOSSO CATALOGO',
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
