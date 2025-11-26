import { Head } from '@/components/Head';
import FooterSection from '@/components/Home/FooterSection';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import { newsHomeMock, formatDate, type NewsItem } from '@/mocks/newsHome';
import { useSearchParams, useNavigate } from 'react-router';

function DetalhesNoticia() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const noticiaId = searchParams.get('id');

  const noticia: NewsItem | undefined = newsHomeMock.find(item => item.id === noticiaId);

  if (!noticia) {
    return (
      <>
        <SocialMediaSidebar />
        <main className=" min-h-screen flex flex-col bg-[#E9F0F0]">
          <Head title="Notícia não encontrada - SS&B Construtora" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
            <h1 className="text-2xl font-bold text-[#3F4141] mb-4">Notícia não encontrada</h1>
            <button 
              onClick={() => navigate('/noticias')}
              className="bg-[#06A956] text-white px-6 py-2 rounded-lg hover:bg-[#058a47] transition-colors"
            >
              Voltar às Notícias
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SocialMediaSidebar />
      <main className=" min-h-screen flex flex-col bg-[#E9F0F0]">
        <Head title={`${noticia.title} - SS&B Construtora`} />

        <section className="py-8 md:py-16 bg-[#E9F0F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <button
              onClick={() => navigate('/noticias')}
              className="mb-6 flex items-center gap-2 text-[#06A956] hover:text-[#058a47] transition-colors duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15l-5-5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Voltar às Notícias
            </button>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-64 sm:h-80 lg:h-96">
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-[#06A956]/10 text-[#06A956] px-3 py-1 rounded-full text-sm font-medium">
                    {noticia.category}
                  </span>
                  <span className="text-[#3F4141]/60 text-sm">
                    {formatDate(noticia.publishedAt)}
                  </span>
                  <span className="text-[#3F4141]/60 text-sm">
                    Por: {noticia.author}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3F4141] leading-tight mb-6">
                  {noticia.title}
                </h1>

                <div className="prose max-w-none">
                 

                  <div 
                    className="text-[#3F4141]/70 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: noticia.content }}
                  />
                </div>

                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={() => navigate('/noticias')}
                    className="text-[#06A956] hover:text-[#058a47] transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 15l-5-5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Ver mais notícias
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

export default DetalhesNoticia
