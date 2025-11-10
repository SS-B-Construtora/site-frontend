import { useSearchParams, useNavigate } from 'react-router';
import { getObraPorId } from '@/mocks/obrasMock';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import FooterSection from '@/components/Home/FooterSection';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import { Head } from '@/components/Head';
import Contact from '../contact/Contact';

const DetailsObra = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const obraId = searchParams.get('id');
  const obra = obraId ? getObraPorId(obraId) : null;

  if (!obra) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl mb-4">Obra não encontrada</h2>
          <button
            onClick={() => navigate('/obras')}
            className="flex items-center gap-2 px-4 py-2 bg-[#06A956] text-white rounded hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Obras
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % obra.imagens.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + obra.imagens.length) % obra.imagens.length,
    );
  };

  return (
    <>
      <SocialMediaSidebar />
      <main className="pt-[72px]">
        <Head title="Obras - SS&B Construtora" />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-[#06A956] px-6 py-4 rounded-lg mb-6 shadow-lg mt-10">
              <h1 className="text-4xl md:text-4xl font-bold text-white">
                {obra.nome}
              </h1>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[16/9] bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src={obra.imagens[currentImage]}
                  alt={`${obra.nome} - Imagem ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0">
                  <div className="bg-white/70 backdrop-blur-lg px-6 py-4 shadow-lg" 
                       style={{
                         borderTopLeftRadius: '20px',
                         borderTopRightRadius: '20px',
                         borderBottomLeftRadius: '6px',
                         borderBottomRightRadius: '6px',
                       }}>
                    <div className="flex items-center gap-6">
                      {obra.imagens.length > 1 && (
                        <div className="flex items-center gap-4">
                          <button
                            onClick={prevImage}
                            className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Imagem anterior"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          
                          <div className="flex items-center gap-1.5">
                            {obra.imagens.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  index === currentImage
                                    ? 'bg-[#06A956] w-2'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Ir para imagem ${index + 1}`}
                              />
                            ))}
                          </div>
                          
                          <button
                            onClick={nextImage}
                            className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Próxima imagem"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      
                      {obra.imagens.length === 1 && (
                        <div className="w-2 h-2 bg-[#06A956] rounded-full" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
			<Contact />
      <FooterSection />
    </>
  );
};

export default DetailsObra;
