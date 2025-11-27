import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import { useSearchParams, useNavigate } from 'react-router';
import { equipamentosPorTipo, type Equipamento } from '@/mocks/locacao';
import FooterSection from '@/components/Home/FooterSection';

function DetailsLocation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tipo = searchParams.get('tipo');

  const getEquipamentos = (): Equipamento[] => {
    if (!tipo) return [];

    switch (tipo) {
      case 'tratores':
        return equipamentosPorTipo.tratores;
      case 'rolos':
        return equipamentosPorTipo.rolos;
      case 'motoniveladores':
        return equipamentosPorTipo.motoniveladores;
      case 'escavadeiras':
        return equipamentosPorTipo.escavadeiras;
      case 'manipuladores':
        return equipamentosPorTipo.manipuladores;
      default:
        return [];
    }
  };

  const equipamentos = getEquipamentos();

  const getTitulo = () => {
    switch (tipo) {
      case 'tratores':
        return 'Tratores';
      case 'rolos':
        return 'Rolos Compressores';
      case 'motoniveladores':
        return 'Motoniveladores';
      case 'escavadeiras':
        return 'Pas, Retro-escavadeiras e escavadeiras';
      case 'manipuladores':
        return 'Manipuladores e etc';
      default:
        return 'Equipamentos';
    }
  };

  const handleVoltar = () => {
    navigate('/locacoes');
  };

  const botao = () => {
    return (
      <>
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleVoltar}
          className="hover:cursor-pointer"
        >
          <path
            d="M11.7405 0.41098C11.6091 0.280705 11.4529 0.177346 11.281 0.106823C11.1092 0.0363008 10.9249 0 10.7388 0C10.5527 0 10.3684 0.0363008 10.1965 0.106823C10.0246 0.177346 9.86848 0.280705 9.73705 0.41098L0.331016 9.71087C0.226085 9.81441 0.142837 9.93738 0.0860371 10.0728C0.029237 10.2082 0 10.3533 0 10.4999C0 10.6464 0.029237 10.7916 0.0860371 10.9269C0.142837 11.0623 0.226085 11.1853 0.331016 11.2888L9.73705 20.5887C10.2917 21.1371 11.1859 21.1371 11.7405 20.5887C12.2951 20.0404 12.2951 19.1563 11.7405 18.6079L3.54559 10.4943L11.7518 2.38063C12.2951 1.84345 12.2951 0.948158 11.7405 0.41098Z"
            fill="#F2F9F9"
          />
        </svg>
      </>
    );
  };

  return (
    <>
      <SocialMediaSidebar />
      <main className=" min-h-screen flex flex-col bg-[#E9F0F0]">
        <Head title={`${getTitulo()} - Locações - SS&B Construtora`} />

        <section className="mt-[10em] bg-[#E9F0F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="flex items-center gap-2 text-2xl lg:text-2xl font-bold text-[#3F4141] leading-tight text-left rounded-md p-2 bg-[#06A956] mb-4">
              {botao()}
              <span className="text-white">{getTitulo()}</span>
            </h1>

            {equipamentos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {equipamentos.map((equipamento) => (
                  <div
                    key={equipamento.id}
                    className="bg-white rounded-xl shadow-lg transition-all duration-500 overflow-hidden group flex flex-col h-full"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={equipamento.imagem}
                        alt={equipamento.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            '/src/assets/locacoes/equipment-placeholder.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#06A956] mb-3 group-hover:text-[#06A956] transition-colors duration-300">
                        {equipamento.titulo}
                      </h3>
                      <p className="text-[#3F4141]/70 text-sm leading-relaxed mb-4 flex-1">
                        {equipamento.descricao}
                      </p>
                        <a href="https://api.whatsapp.com/send?phone=558591524951&text=%60Olá%2C+vim+pelo+site+e+gostaria+de+contratar+o+serviço+de+locação." 
                        
                        target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <button className="w-full text-[#06A956] rounded-lg font-bold flex items-center justify-center gap-2 hover:cursor-pointer border border-[#06A956] transition-colors duration-300 mt-auto" >
                      
                        Quero solicitar!
                      </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#3F4141]/70 text-lg">
                  Nenhum equipamento encontrado para esta categoria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

export default DetailsLocation;
