import { Head } from '@/components/Head';
import FooterSection from '@/components/Home/FooterSection';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import { obrasMockData } from '@/mocks/obrasMock';
import bgObras from '@/assets/obras/bgmock.svg';
import bgIndustrias from '@/assets/obras/industrias.jpg';
import bgRodovias from '@/assets/obras/rodoviarias.jpg';
import bgTerraplanagem from '@/assets/obras/terraplanagem.jpg';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

//icones
import iconeEolicos from '@/assets/obras/icons/eolicos.jpg';
import iconeRodovias from '@/assets/obras/icons/rodoviarias.jpg';
import iconeTerraplanagem from '@/assets/obras/icons/terraplanagem.jpg';
import iconeIndustrias from '@/assets/obras/icons/industrias.jpg';

//obras
import ufvBelmonte from '@/assets/obras/ufv_belmonte.jpg';
import ufvCristino from '@/assets/obras/ufv_cristino.jpg';
import ufvLins from '@/assets/obras/ufv_lins.jpg';
import ufvParonama from '@/assets/obras/ufv_panorama.jpg';
import pontaDeSuipe from '@/assets/obras/ponta_de_suipe.jpg';
import bangalos from '@/assets/obras/bangalos_.jpg';

const getBackgroundForCategory = (category: string) => {
  const normalized = category.trim().toUpperCase();

  switch (normalized) {
    case 'PARQUES INDUSTRIAIS':
      return bgIndustrias;
    case 'OBRAS RODOVIÁRIAS':
      return bgRodovias;
    case 'TERRAPLANAGEM E PAVIMENTAÇÃO':
      return bgTerraplanagem;
    default:
      return bgObras;
  }
};

const getIcon = (category: string) => {
  const normalized = category.trim().toUpperCase();

  switch (normalized) {
    case 'PARQUES INDUSTRIAIS':
      return iconeIndustrias;
    case 'OBRAS RODOVIÁRIAS':
      return iconeRodovias;
    case 'TERRAPLANAGEM E PAVIMENTAÇÃO':
      return iconeTerraplanagem;
    default:
      return iconeEolicos;
  }
};

const iconeObra = () => {
  return (
    <>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.85 8.45V7.15H7.15V8.45H5.85ZM5.2 2.6H7.8V1.3H5.2V2.6ZM1.3 12.35C0.942501 12.35 0.636351 12.2226 0.381551 11.9678C0.126751 11.713 -0.00043223 11.4071 1.10357e-06 11.05V8.45H4.55V9.1C4.55 9.28417 4.6124 9.43865 4.7372 9.56345C4.862 9.68825 5.01627 9.75043 5.2 9.75H7.8C7.98417 9.75 8.13865 9.6876 8.26345 9.5628C8.38825 9.438 8.45043 9.28373 8.45 9.1V8.45H13V11.05C13 11.4075 12.8726 11.7136 12.6178 11.9684C12.363 12.2232 12.0571 12.3504 11.7 12.35H1.3ZM1.10357e-06 7.15V3.9C1.10357e-06 3.5425 0.127401 3.23635 0.382201 2.98155C0.637001 2.72675 0.942934 2.59957 1.3 2.6H3.9V1.3C3.9 0.942501 4.0274 0.636351 4.2822 0.381551C4.537 0.126751 4.84293 -0.00043223 5.2 1.10357e-06H7.8C8.1575 1.10357e-06 8.46365 0.127401 8.71845 0.382201C8.97325 0.637001 9.10043 0.942934 9.1 1.3V2.6H11.7C12.0575 2.6 12.3636 2.7274 12.6184 2.9822C12.8732 3.237 13.0004 3.54293 13 3.9V7.15H8.45V6.5C8.45 6.31583 8.3876 6.16135 8.2628 6.03655C8.138 5.91175 7.98373 5.84957 7.8 5.85H5.2C5.01583 5.85 4.86135 5.9124 4.73655 6.0372C4.61175 6.162 4.54957 6.31627 4.55 6.5V7.15H1.10357e-06Z"
          fill="gray"
        />
      </svg>
    </>
  );
};

const carouselImages = [
  {
    src: ufvBelmonte,
    title: 'UFV Belmonte',
  },
  {
    src: ufvCristino,
    title: 'UFV Cristino',
  },
  {
    src: ufvLins,
    title: 'UFV Lins ',
  },
  {
    src: ufvParonama,
    title: 'UFV Paronama ',
  },
  {
    src: pontaDeSuipe,
    title: 'Ponta de Suipe ',
  },
  {
    src: bangalos,
    title: 'Bangalos',
  }
];

function Obras() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // 4 segundos
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  return (
    <>
      <SocialMediaSidebar />
      <main className="">
        <Head title="Obras - SS&B Construtora" />
        <div className="relative -mt-[100px]  w-full h-[500px] lg:h-[800px] flex items-center justify-center overflow-hidden">
          {carouselImages[current] ? (
            <>
              <img
                src={carouselImages[current].src}
                alt={carouselImages[current].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute left-6 bottom-6 z-10 flex items-start">
                <h2 className="text-[#00FF7D] text-2xl lg:text-4xl font-bold bg-black/40 px-6 py-2 rounded-lg drop-shadow-lg">
                  {carouselImages[current].title}
                </h2>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Nenhuma imagem disponível</span>
            </div>
          )}

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            aria-label="Próximo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 z-20">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 w-3 rounded-full transition-all duration-300 border border-white focus:outline-none ${
                  idx === current
                    ? 'bg-green-500 w-4'
                    : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Ir para imagem ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="bg-[#E9F0F0]">
          <h1 className="text-[#3F4141] font-bold text-3xl lg:text-4xl text-center py-10 px-4 lg:px-0">
            Aqui você vê as{' '}
            <span className="font-bold text-[#06A956]">nossas obras!</span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {obrasMockData.map((item) => (
              <div key={item.id} className="relative">
                <div
                  className="absolute inset-0 border border-gray-300 rounded-lg shadow-md ml-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${getBackgroundForCategory(
                      item.category,
                    )})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: 'rgba(6, 169, 86, 0.1)',
                      backdropFilter: 'blur(3px)',
                    }}
                  ></div>
                </div>

                <div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '4px solid white',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
                  }}
                ></div>

                <div className="relative z-10 p-8 pl-12 ml-4 flex flex-col items-center text-center min-h-[350px]">
                  <h2 className="text-xl font-bold text-white mb-4 drop-shadow-md">
                    {item.category}
                  </h2>
                  <div
                    className="space-y-3 px-4 py-4 rounded-lg shadow-sm w-full max-w-sm ml-12"
                    style={{
                      backgroundColor: 'rgba(233, 240, 240, 0.95)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {item.obras.map((obra, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-2 text-left cursor-pointer hover:bg-white/20 p-1 rounded transition-all duration-200"
                        onClick={() =>
                          navigate(`/obras/detalhes?id=${obra.id}`)
                        }
                      >
                        {iconeObra()}
                        <span className="text-[#3F4141] text-xs lg:text-sm hover:font-bold transition-colors duration-200 leading-tight">
                          {obra.nome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20 ">
                  <img
                    src={getIcon(item.category)}
                    alt={item.category}
                    className="w-24 h-24 sm:w-24 sm:h-24 rounded-full object-cover"
                    style={{
                      border: '10px solid #E9F0F0',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <FooterSection />
      </main>
    </>
  );
}

export default Obras;
