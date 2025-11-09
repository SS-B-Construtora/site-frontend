import { Head } from '@/components/Head';
import FooterSection from '@/components/Home/FooterSection';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import { newsHomeMock } from '@/mocks/newsHome';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Noticias() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 5;

  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = newsHomeMock.slice(indexOfFirstNoticia, indexOfLastNoticia);

  const totalPages = Math.ceil(newsHomeMock.length / noticiasPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <SocialMediaSidebar />
      <main className="pt-[72px] min-h-screen flex flex-col bg-[#E9F0F0]">
        <Head title="Notícias - SS&B Construtora" />

        <section className=" bg-[#E9F0F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#3F4141] leading-tight text-left py-8 sm:py-12 lg:py-16">
              <span className="text-[#06A956]">Notícias</span>
            </h1>

            <div className="space-y-8 mb-8">
              {currentNoticias.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-md"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 h-64 lg:h-auto">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="bg-[#06A956]/10 text-[#06A956] px-3 py-1 rounded-full text-sm font-medium">
                              {item.category}
                            </span>
                            <span className="text-[#3F4141]/60 text-sm">
                              {item.publishedAt}
                            </span>
                          </div>

                          <h2 className="text-xl lg:text-2xl font-bold text-[#3F4141] mb-3 leading-tight">
                            {item.title}
                          </h2>

                          <p className="text-[#3F4141]/70 leading-relaxed mb-4">
                            {item.description}
                          </p>

                          <div className="text-sm text-[#3F4141]/60 mb-4">
                            Por: {item.author}
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button 
                            onClick={() => navigate(`/noticias/detalhes?id=${item.id}`)}
                            className="text-[#06A956] px-6 py-2 rounded-lg font-semibold hover:bg-[#058a47] hover:text-white transition-colors duration-300 flex items-center gap-2"
                          >
                            Ler tudo
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 15l5-5-5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-8">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-[#06A956] text-[#06A956] hover:bg-[#06A956] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#06A956]"
                >
                  Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      currentPage === number
                        ? 'bg-[#06A956] text-white'
                        : 'border border-[#06A956] text-[#06A956] hover:bg-[#06A956] hover:text-white'
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-[#06A956] text-[#06A956] hover:bg-[#06A956] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#06A956]"
                >
                  Próxima
                </button>
              </div>
            )}

            <div className="text-center text-[#3F4141]/60 text-sm mb-8">
              Mostrando {indexOfFirstNoticia + 1}-{Math.min(indexOfLastNoticia, newsHomeMock.length)} de {newsHomeMock.length} notícias
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

export default Noticias;
