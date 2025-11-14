import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';

import trator from '@/assets/locacoes/trator.svg';
import manipuladores from '@/assets/locacoes/manipuladores.svg';
import rolos from '@/assets/locacoes/rolos.svg';
import retro from '@/assets/locacoes/retro.svg';
import moto from '@/assets/locacoes/moto.svg';
import FooterSection from '@/components/Home/FooterSection';
import { useNavigate } from 'react-router';

function Locacoes() {
  const navigate = useNavigate();
  const botao = () => {
    return (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#F2F9F9" />
          <path
            d="M14.3461 6.72113C14.346 6.45613 14.2406 6.20203 14.0533 6.01465C13.8659 5.82726 13.6118 5.72192 13.3468 5.72175L8.01282 5.72034C7.74752 5.72034 7.49309 5.82573 7.30549 6.01333C7.11789 6.20092 7.0125 6.45536 7.0125 6.72066C7.0125 6.98596 7.11789 7.2404 7.30549 7.42799C7.49309 7.61559 7.74752 7.72098 8.01282 7.72098L10.9322 7.72145L5.49458 13.1591C5.30705 13.3466 5.20169 13.601 5.20169 13.8662C5.20169 14.1314 5.30705 14.3858 5.49458 14.5733C5.68212 14.7609 5.93647 14.8662 6.20169 14.8662C6.46691 14.8662 6.72126 14.7609 6.9088 14.5733L12.3464 9.13567V12.0546C12.3464 12.186 12.3723 12.316 12.4226 12.4374C12.4729 12.5588 12.5465 12.669 12.6394 12.7619C12.7323 12.8548 12.8426 12.9285 12.964 12.9788C13.0853 13.029 13.2154 13.0549 13.3468 13.0549C13.4781 13.0549 13.6082 13.029 13.7296 12.9788C13.8509 12.9285 13.9612 12.8548 14.0541 12.7619C14.147 12.669 14.2207 12.5588 14.2709 12.4374C14.3212 12.316 14.3471 12.186 14.3471 12.0546L14.3461 6.72113Z"
            fill="#06A956"
          />
        </svg>
      </>
    );
  };

  return (
    <>
      <SocialMediaSidebar />
      <main className=" min-h-screen flex flex-col bg-[#E9F0F0]">
        <Head title="Locações - SS&B Construtora" />

        <section className="py-8 md:py-16 bg-[#E9F0F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#3F4141] leading-tight text-left py-8 sm:py-12 lg:py-16">
              Confira <span className="text-[#06A956]">nossas locações!</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-4 gap-3 sm:gap-4 min-h-[600px] lg:h-[600px] xl:h-[700px]">
              <div 
                className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-1 lg:row-span-2 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[200px] sm:min-h-[250px] lg:min-h-0"
                onClick={() => navigate('/locacoes/detalhes?tipo=tratores')}
              >
                <img
                  src={trator}
                  alt="Tratores"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#06A956]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-[#F2F9F9]/95 group-hover:bg-[#06A956]/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg transition-colors duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[#3F4141] group-hover:text-white font-bold text-base sm:text-lg transition-colors duration-300">
                      Tratores
                    </h3>
                    <div className="ml-2 flex-shrink-0">{botao()}</div>
                  </div>
                  <p className="text-[#3F4141]/70 group-hover:text-white/90 text-sm transition-colors duration-300">
                    Desempenho Poderoso: Nossa Frota de Tratores.
                  </p>
                </div>
              </div>

              <div 
                className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[200px] lg:min-h-0"
                onClick={() => navigate('/locacoes/detalhes?tipo=rolos')}
              >
                <img
                  src={rolos}
                  alt="Manipuladores"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#06A956]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#F2F9F9]/95 group-hover:bg-[#06A956]/95 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-colors duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[#3F4141] group-hover:text-white font-bold text-sm sm:text-base transition-colors duration-300">
                      Rolos Compressores
                    </h3>
                    <div className="ml-2 flex-shrink-0">{botao()}</div>
                  </div>
                  <p className="text-[#3F4141]/70 group-hover:text-white/90 text-xs sm:text-sm transition-colors duration-300">
                    Compactação de Excelência: Nossos Rolos Compressores.
                  </p>
                </div>
              </div>

              <div 
                className="col-span-1 sm:col-span-1 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[200px] lg:min-h-0"
                onClick={() => navigate('/locacoes/detalhes?tipo=motoniveladores')}
              >
                <img
                  src={moto}
                  alt="Rolos Compactadores"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#06A956]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#F2F9F9]/95 group-hover:bg-[#06A956]/95 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-colors duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[#3F4141] group-hover:text-white font-bold text-sm sm:text-base transition-colors duration-300">
                      Motoniveladores
                    </h3>
                    <div className="ml-2 flex-shrink-0">{botao()}</div>
                  </div>
                  <p className="text-[#3F4141]/70 group-hover:text-white/90 text-xs sm:text-sm transition-colors duration-300">
                    Terrenos Nivelados com Precisão: Conheça Nossos
                    Motoniveladores.
                  </p>
                </div>
              </div>

              <div 
                className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 sm:row-span-1 lg:row-span-2 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[250px] lg:min-h-0"
                onClick={() => navigate('/locacoes/detalhes?tipo=escavadeiras')}
              >
                <img
                  src={retro}
                  alt="Retroescavadeiras"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#06A956]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-[#F2F9F9]/95 group-hover:bg-[#06A956]/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg transition-colors duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[#3F4141] group-hover:text-white font-bold text-base sm:text-lg transition-colors duration-300">
                      Pás, Retro-escavadeiras e escavadeiras
                    </h3>
                    <div className="ml-2 flex-shrink-0">{botao()}</div>
                  </div>
                  <p className="text-[#3F4141]/70 group-hover:text-white/90 text-sm transition-colors duration-300">
                    Escavação Eficiente: Descubra Nossas Pás, Retroescavadeiras
                    e Escavadeiras.
                  </p>
                </div>
              </div>

              <div 
                className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-1 sm:row-span-1 lg:row-span-2 group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[200px] sm:min-h-[250px] lg:min-h-0"
                onClick={() => navigate('/locacoes/detalhes?tipo=manipuladores')}
              >
                <img
                  src={manipuladores}
                  alt="Manipuladores"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#06A956]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#F2F9F9]/95 group-hover:bg-[#06A956]/95 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-colors duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[#3F4141] group-hover:text-white font-bold text-sm sm:text-base transition-colors duration-300">
                      Manipuladores e etc
                    </h3>
                    <div className="ml-2 flex-shrink-0">{botao()}</div>
                  </div>
                  <p className="text-[#3F4141]/70 group-hover:text-white/90 text-xs sm:text-sm transition-colors duration-300">
                    Versatilidade em Ação: Explore Nossos Manipuladores e
                    Equipamentos Afins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

export default Locacoes;
