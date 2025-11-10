import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import FooterSection from '@/components/Home/FooterSection';
import { projetosSociaisMock, formatDate } from '@/mocks/projetosSociais';

export function ProjetosSociais() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjetos = projetosSociaisMock.slice(startIndex, endIndex);
  const totalPages = Math.ceil(projetosSociaisMock.length / itemsPerPage);

  const handleProjetoClick = (slug: string) => {
    navigate(`/projetos-sociais/detalhes?slug=${slug}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 100);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em andamento':
        return 'bg-green-100 text-green-800';
      case 'Concluído':
        return 'bg-blue-100 text-blue-800';
      case 'Planejado':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SocialMediaSidebar />
      <main className="pt-[72px]">
        <Head title="Projetos Sociais - SS&B Construtora" />
        
        <div
          style={{
            background: 'linear-gradient(124.1deg, #3F4141 -8.3%, #02351B 101.42%)',
          }}
          className="py-16 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-[#06A956] text-4xl lg:text-6xl font-bold mb-4">
                Projetos Sociais
              </h1>
              <p className="text-white text-lg lg:text-xl max-w-3xl mx-auto">
                Conheça as iniciativas sociais da SS&B Construtora que transformam 
                comunidades e promovem desenvolvimento sustentável em nossa região.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#E9F0F0] py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="space-y-8">
              {currentProjetos.map((projeto) => (
                <article
                  key={projeto.id}
                  onClick={() => handleProjetoClick(projeto.slug)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <div className="h-64 lg:h-full overflow-hidden">
                        <img
                          src={projeto.image}
                          alt={projeto.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="lg:w-2/3 p-6 lg:p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            projeto.status
                          )}`}
                        >
                          {projeto.status}
                        </span>
                        <span className="px-3 py-1 bg-[#06A956]/10 text-[#06A956] rounded-full text-xs font-medium">
                          {projeto.categoria}
                        </span>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-[#3F4141] mb-4 group-hover:text-[#06A956] transition-colors duration-300">
                        {projeto.title}
                      </h2>

                      <p className="text-[#3F4141] text-base lg:text-lg mb-4 leading-relaxed">
                        {projeto.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          Início: {formatDate(projeto.startDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {projeto.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                          {projeto.beneficiados.toLocaleString()} beneficiados
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="inline-flex items-center text-[#06A956] font-semibold hover:text-[#048A47] transition-colors duration-200">
                          Leia mais
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                >
                  Anterior
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-[#06A956] text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                >
                  Próxima
                </button>
              </div>
            )}
          </div>
        </div>

        <FooterSection />
      </main>
    </>
  );
}