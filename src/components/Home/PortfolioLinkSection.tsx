import { useState, useEffect } from 'react';
import cdcLogo from '@/assets/parceiros/CDC.png';
import { useNavigate } from 'react-router';

import parceiro1 from '@/assets/parceiros/parceiro1.jpeg';
import parceiro2 from '@/assets/parceiros/parceiro2.jpeg';
import parceiro3 from '@/assets/parceiros/parceira3.jpeg';
import parceiro4 from '@/assets/parceiros/parceiro4.jpeg';
import parceiro5 from '@/assets/parceiros/parceiro5.jpeg';
import parceiro6 from '@/assets/parceiros/parceiro6.jpeg';
import parceiro7 from '@/assets/parceiros/parceiro7.jpeg';

type Partner = {
  id: string;
  src: string;
  alt: string;
  name: string;
};

const partners: Partner[] = [
  
  {
    id: '1',
    src: parceiro2,
    alt: 'Governo do Ceará Logo',
    name: 'Governo do Ceará',
  },
  {
    id: '2',
    src: parceiro5,
    alt: 'Cobra Brasil Logo',
    name: 'Cobra Brasil',
  },
  {
    id: '3',
    src: parceiro6,
    alt: 'EDP Logo',
    name: 'EDP',
  },

  {
    id: '4',
    src: parceiro7,
    alt: 'CSP Logo',
    name: 'CSP',
  },
];

export default function PortfolioLinkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // Responsivo baseado no tamanho da tela
  const autoPlayInterval = 3000;
  const navigate = useNavigate()

  // Ajustar itemsPerView baseado no tamanho da tela
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) { // sm
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) { // lg
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, partners.length - itemsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, partners.length - itemsPerView);
  return (
    <section aria-labelledby="portfolio-heading" className="#E9F0F0 pt-4 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-6xl flex flex-col gap-6 lg:flex-row lg:gap-8 items-start justify-start">
          <div className="w-full lg:flex-1 text-left">
            <h2
              id="portfolio-heading"
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#06A956] mt-2 lg:mt-4 leading-tight"
            >
              SS&B
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#06A956] leading-tight">
              Construtora
            </h2>

            <p className="mt-3 lg:mt-4 text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#06A956] leading-tight">
              Experiência <span className="text-[#06A956]">em</span>
            </p>

            <p className="font-bold text-2xl sm:text-3xl lg:text-5xl text-[#06A956] leading-tight">
              grandes obras!
            </p>
          </div>
          <div className="w-full lg:flex-1 mt-2 lg:mt-4">
            <div className="lg:ml-30">
              <h2 className="text-sm sm:text-base lg:text-[1.125rem] font-bold text-[#3F4141] text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                Possuimos todo o maquinário para sua obra! Uma vasta variedade
                prontas para te atender.
              </h2>
              <div className="flex justify-start mt-4 lg:mt-3" onClick={() => navigate('/locacoes')}>
                <button className="border border-[#3F4141] text-[#3F4141] font-medium text-xs sm:text-sm rounded-md sm:rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 transition-colors duration-200 hover:bg-[#06A956] hover:text-white hover:border-[#06A956] shadow-sm hover:shadow-md">
                  VEJA NOSSO PORTFÓLIO
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-[#3F4141] mb-8">
            Nossos <span className="text-[#3F4141]">Parceiros</span>
          </h3>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {partners.map((partner) => (
                <div key={partner.id} className="flex-none w-1/3 sm:w-1/4 lg:w-1/5 px-1 sm:px-2 lg:px-4">
                  <div className="group flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 rounded-lg hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-lg overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="w-full h-full object-contain p-1 sm:p-2 transition-all duration-300"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-[#3F4141]/70 group-hover:text-[#06A956] transition-colors duration-300 text-center leading-tight">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {maxIndex > 0 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: maxIndex + 1 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[#06A956] scale-125'
                        : 'bg-[#3F4141]/30 hover:bg-[#3F4141]/50'
                    }`}
                    aria-label={`Ir para grupo ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
