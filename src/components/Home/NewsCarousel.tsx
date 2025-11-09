import { useEffect, useState } from 'react';
import { getLatestNews } from '@/mocks/newsHome';
import type { NewsItem } from '@/mocks/newsHome';
import { useNavigate } from 'react-router';

function NewsCarousel() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNews = () => {
      try {
        setLoading(true);
        const newsData = getLatestNews(4);
        setNews(newsData);
      } catch (err) {
        console.error('Erro ao carregar notícias:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <section
        className="p-2 mt-4"
        style={{
          background:
            'linear-gradient(124.1deg, #3F4141 -8.3%, #02351B 101.42%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-8">
            Carregando notícias...
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      aria-labelledby="portfolio-heading"
      className="p-2 mt-4"
      style={{
        background: 'linear-gradient(124.1deg, #3F4141 -8.3%, #02351B 101.42%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-8xl flex flex-row items-center justify-between gap-2">
          <h2 className="text-3xl font-bold text-white mt-4 leading-none flex-shrink-0">
            Veja nossas últimas notícias!
          </h2>

          <button
            onClick={() => navigate('/noticias')}
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-white text-white text-xs sm:text-sm font-medium rounded-md mt-4 transition-colors duration-200 hover:bg-[#06A956] hover:text-white hover:border-[#06A956] flex-shrink-0 whitespace-nowrap shadow-sm hover:shadow-md"
          >
            Outras notícias{' '}
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-1"
            >
              <path
                d="M0.171657 7.84344C0.225708 7.89307 0.289918 7.93244 0.36061 7.95931C0.431302 7.98617 0.507086 8 0.583622 8C0.660159 8 0.735943 7.98617 0.806634 7.95931C0.877326 7.93244 0.941536 7.89307 0.995587 7.84344L4.86387 4.30062C4.90702 4.26118 4.94126 4.21433 4.96462 4.16276C4.98798 4.11118 5 4.05589 5 4.00006C5 3.94422 4.98798 3.88893 4.96462 3.83736C4.94126 3.78578 4.90702 3.73893 4.86387 3.69949L0.995586 0.156677C0.767493 -0.0522257 0.39975 -0.0522257 0.171656 0.156677C-0.0564372 0.365579 -0.0564372 0.702382 0.171656 0.911284L3.54186 4.00219L0.167003 7.09309C-0.0564361 7.29773 -0.0564366 7.6388 0.171657 7.84344Z"
                fill="#E9F0F0"
              />
            </svg>
          </button>
        </div>

        <div className="flex overflow-x-auto gap-6 mb-8 px-4 scrollbar-hide">
          {news.map((item, index) => {
            if (index >= 3) return null;
            return (
              <div
                key={item.id}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 relative group inline-block rounded-lg flex-shrink-0"
              >
                <div className="relative w-[340px] h-[200px] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:hue-rotate-90"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-green-900/30 transition-all duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <button className="w-full  text-white font-semibold py-2 rounded-md group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                      Leia mais
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NewsCarousel;
