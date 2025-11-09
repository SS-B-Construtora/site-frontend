import noticia1 from '@/assets/news/noticia1.svg';
import noticia2 from '@/assets/news/noticia2.svg';
import noticia3 from '@/assets/news/noticia3.svg';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  publishedAt: string;
  author: string;
  category: string;
  slug: string;
}

export const newsHomeMock: NewsItem[] = [
  {
    id: "1",
    title: "SS&B Construtora inaugura novo parque eólico no Ceará",
    description: "Nova instalação gera energia limpa para mais de 50 mil residências, reforçando nosso compromisso com a sustentabilidade e desenvolvimento regional.",
    content: `
      <p>A SS&B Construtora tem o prazer de anunciar a inauguração oficial de mais um parque eólico no estado do Ceará, consolidando nossa posição como líder em projetos de energia renovável na região Nordeste.</p>
      
      <p>O novo complexo eólico, localizado no município de Aracati, conta com 25 modernos aerogeradores de última geração, capazes de produzir energia limpa suficiente para abastecer mais de 50 mil residências por ano. Este projeto representa um investimento de R$ 180 milhões e gerou mais de 300 empregos diretos durante sua construção.</p>
      
      <p>"Este parque eólico é mais uma demonstração do nosso compromisso inabalável com a sustentabilidade e o desenvolvimento responsável", afirmou o CEO da SS&B Construtora. "Estamos contribuindo ativamente para a transição energética do Brasil, promovendo desenvolvimento econômico regional e preservação ambiental."</p>
      
      <p>O projeto utilizou tecnologia de ponta em turbinas eólicas, com sistema de monitoramento inteligente que otimiza a captação de ventos e maximiza a eficiência energética. A capacidade total instalada é de 75 MW, posicionando o empreendimento entre os mais significativos da região.</p>
      
      <p>Além dos benefícios ambientais, o parque eólico trará importantes impactos socioeconômicos para a comunidade local, incluindo geração de empregos permanentes para operação e manutenção, além de royalties para o município que contribuirão para melhorias na infraestrutura e serviços públicos.</p>
    `,
    image: noticia1,
    publishedAt: "2024-11-01",
    author: "Equipe SS&B",
    category: "Energia Eólica",
    slug: "novo-parque-eolico-ceara"
  },
  {
    id: "2", 
    title: "Conclusão da obra rodoviária CE-040 marca novo marco",
    description: "Finalização da modernização de 25km da rodovia estadual melhora mobilidade e conectividade entre municípios da região metropolitana.",
    content: `
      <p>A SS&B Construtora concluiu com sucesso a modernização de um trecho estratégico de 25 quilômetros da rodovia CE-040, obra que representa um marco significativo na melhoria da infraestrutura rodoviária do Ceará.</p>
      
      <p>O projeto envolveu a completa remodelação do pavimento asfáltico, implementação de sistema de drenagem moderno, instalação de sinalização inteligente e construção de dispositivos de segurança que atendem aos mais rigorosos padrões técnicos nacionais.</p>
      
      <p>Durante os 18 meses de execução, nossa equipe enfrentou desafios técnicos complexos, incluindo obras em trechos de alta declividade e adaptação de tráfego em áreas de intenso movimento. Todas as etapas foram concluídas sem acidentes, demonstrando nosso comprometimento com a segurança e qualidade.</p>
      
      <p>A nova infraestrutura beneficiará diretamente mais de 200 mil habitantes da região metropolitana de Fortaleza, reduzindo significativamente o tempo de deslocamento entre municípios e melhorando as condições de tráfego para veículos de carga e passeio.</p>
      
      <p>"Esta obra representa nossa expertise em projetos rodoviários complexos e reafirma nosso papel fundamental no desenvolvimento da infraestrutura cearense", destacou o diretor de operações da empresa. O investimento total foi de R$ 45 milhões, recursos provenientes de parceria entre governo estadual e federal.</p>
    `,
    image: noticia2,
    publishedAt: "2024-10-28",
    author: "Departamento de Engenharia",
    category: "Obras Rodoviárias", 
    slug: "conclusao-obra-ce040"
  },
  {
    id: "3",
    title: "Projeto social beneficia comunidades locais",
    description: "Iniciativa de capacitação profissional em parceria com escolas técnicas forma nova geração de trabalhadores especializados em construção.",
    content: `
      <p>A SS&B Construtora lançou um ambicioso programa de responsabilidade social voltado para capacitação profissional de jovens em situação de vulnerabilidade social, estabelecendo parcerias estratégicas com instituições de ensino técnico da região.</p>
      
      <p>O programa "Construindo Futuros" já formou sua primeira turma de 120 jovens em cursos de pedreiro, eletricista predial, encanador e auxiliar de obras. Todos os participantes receberam certificação reconhecida pelo Sistema Nacional de Aprendizagem Industrial (SENAI) e tiveram acesso a estágio remunerado em nossas obras.</p>
      
      <p>A iniciativa vai além da capacitação técnica, oferecendo também módulos de desenvolvimento pessoal, educação financeira e empreendedorismo. "Nosso objetivo é formar não apenas profissionais competentes, mas cidadãos preparados para o mercado de trabalho e a vida", explicou a coordenadora do programa.</p>
      
      <p>Das 120 pessoas formadas na primeira turma, 85% foram efetivadas em empresas parceiras ou na própria SS&B Construtora. Este índice de empregabilidade demonstra a qualidade da formação oferecida e a demanda do mercado por profissionais qualificados no setor de construção civil.</p>
      
      <p>Para 2025, o programa será expandido para incluir cursos de soldador, operador de máquinas pesadas e técnico em segurança do trabalho, com meta de formar mais 200 jovens. A empresa investiu R$ 2,5 milhões nesta primeira fase do projeto, recursos que incluem equipamentos, material didático e bolsas de estudo.</p>
    `,
    image: noticia3,
    publishedAt: "2024-10-25",
    author: "Setor de Responsabilidade Social",
    category: "Projetos Sociais",
    slug: "projeto-social-capacitacao"
  },
];

export const getLatestNews = (limit: number = 4): NewsItem[] => {
  return newsHomeMock
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getNewsByCategory = (category: string): NewsItem[] => {
  return newsHomeMock.filter(news => news.category === category);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsHomeMock.find(news => news.id === id);
};

export const getNewsBySlug = (slug: string): NewsItem | undefined => {
  return newsHomeMock.find(news => news.slug === slug);
};
