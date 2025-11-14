import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import FooterSection from '@/components/Home/FooterSection';
import { projetosSociaisMock, formatDate } from '@/mocks/projetosSociais';
import type { ProjetoSocialItem } from '@/mocks/projetosSociais';

export function DetalhesProjetoSocial() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [projeto, setProjeto] = useState<ProjetoSocialItem | null>(null);
  
  const slug = searchParams.get('slug');

  useEffect(() => {
    if (slug) {
      const projetoEncontrado = projetosSociaisMock.find(p => p.slug === slug);
      setProjeto(projetoEncontrado || null);
    } else {
      const primeiroProjeto = projetosSociaisMock[0];
      if (primeiroProjeto) {
        setProjeto(primeiroProjeto);
      }
    }
  }, [slug]);

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

  if (!projeto) {
    return (
      <main className="">
        <Head title="Projeto não encontrado - SS&B Construtora" />
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#E9F0F0]">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-[#3F4141] mb-4">Projeto não encontrado</h1>
            <p className="text-[#3F4141] mb-6">O projeto social que você está procurando não foi encontrado.</p>
            <button
              onClick={() => navigate('/projetos-sociais')}
              className="px-6 py-3 bg-[#06A956] text-white font-semibold rounded-lg hover:bg-[#048A47] transition-colors duration-200"
            >
              Voltar aos Projetos Sociais
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <SocialMediaSidebar />
      <main className="pt-0">
        <Head title={`${projeto.title} - Projetos Sociais - SS&B Construtora`} />
        
        <div className="relative h-96 lg:h-[500px] overflow-hidden -mt-[72px] ">
          <img
            src={projeto.image}
            alt={projeto.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 w-full">
              <div className="text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      projeto.status
                    )}`}
                  >
                    {projeto.status}
                  </span>
                  <span className="px-3 py-1 bg-[#06A956]/20 text-[#06A956] rounded-full text-xs font-medium">
                    {projeto.categoria}
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                  {projeto.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-sm lg:text-base">
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
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#3F4141] mb-4">
                Sobre o Projeto
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <div
                className="text-[#3F4141] leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: projeto.content }}
              />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => navigate('/projetos-sociais')}
                className="inline-flex items-center px-6 py-3 bg-[#06A956] text-white font-semibold rounded-lg hover:bg-[#048A47] transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar aos Projetos Sociais
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#E9F0F0] py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#3F4141] mb-8 text-center">
              Outros Projetos Sociais
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetosSociaisMock
                .filter(p => p.id !== projeto.id)
                .slice(0, 3)
                .map((p) => (
                  <div
                    key={p.id}
                    onClick={() => navigate(`/projetos-sociais/detalhes?slug=${p.slug}`)}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(
                          p.status
                        )}`}
                      >
                        {p.status}
                      </span>
                      <h4 className="font-bold text-[#3F4141] mb-2 line-clamp-2 group-hover:text-[#06A956] transition-colors duration-300">
                        {p.title}
                      </h4>
                      <p className="text-sm text-[#3F4141] line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <FooterSection />
      </main>
    </>
  );
}