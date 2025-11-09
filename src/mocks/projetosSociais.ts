import projeto1 from '@/assets/news/noticia1.svg';
import projeto2 from '@/assets/news/noticia2.svg';
import projeto3 from '@/assets/news/noticia3.svg';
import { formatDate } from '@/utils/dateUtils';

export interface ProjetoSocialItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  startDate: string; 
  location: string;
  status: 'Em andamento' | 'Concluído' | 'Planejado';
  beneficiados: number;
  categoria: string;
  slug: string;
}

export { formatDate };

export const projetosSociaisMock: ProjetoSocialItem[] = [
  {
    id: "1",
    title: "Programa Construindo o Futuro - Capacitação Profissional",
    description: "Projeto de capacitação profissional em construção civil para jovens em vulnerabilidade social, oferecendo formação técnica e inserção no mercado de trabalho.",
    content: `
      <p>O programa "Construindo o Futuro" é uma iniciativa da SS&B Construtora que visa capacitar jovens entre 16 e 24 anos em situação de vulnerabilidade social, oferecendo formação técnica gratuita em áreas da construção civil.</p>
      
      <p>Desde seu lançamento, o programa já formou mais de 150 jovens em cursos de pedreiro, eletricista, encanador e operação de máquinas. Além da formação técnica, os participantes recebem orientação profissional, acompanhamento psicológico e auxílio para inserção no mercado de trabalho.</p>
      
      <p>O projeto conta com instrutores experientes da própria SS&B e parceiros especializados, oferecendo aulas práticas em nosso centro de treinamento equipado com ferramentas e materiais de última geração. Os jovens também participam de visitas técnicas a obras da empresa para vivenciar a realidade profissional.</p>
      
      <p>Mais de 85% dos formandos conseguiram emprego na área em até 6 meses após a conclusão do curso. Muitos deles foram contratados pela própria SS&B, contribuindo para o crescimento da empresa e da região onde atuamos.</p>
      
      <p>O programa também oferece bolsa-auxílio durante o período de formação, material didático gratuito e certificação reconhecida pelo mercado. Nossa meta é expandir o projeto para outras regiões do Ceará nos próximos anos.</p>
    `,
    image: projeto1,
    startDate: '2023-03-15T10:00:00.000000Z', 
    location: "Fortaleza, CE",
    status: "Em andamento",
    beneficiados: 150,
    categoria: "Capacitação Profissional",
    slug: "programa-construindo-futuro"
  },
  {
    id: "2",
    title: "Reforma de Escolas Municipais - Educação de Qualidade",
    description: "Projeto voluntário de reforma e modernização de escolas públicas municipais, melhorando a infraestrutura educacional em comunidades carentes.",
    content: `
      <p>O projeto "Educação de Qualidade" é uma iniciativa voluntária da SS&B Construtora que visa reformar e modernizar escolas públicas municipais em comunidades carentes, proporcionando um ambiente mais adequado para o aprendizado.</p>
      
      <p>Já foram beneficiadas 12 escolas em diferentes municípios do Ceará, com reformas que incluem pintura completa, renovação de banheiros, instalação de sistemas elétricos modernos, construção de quadras esportivas e criação de bibliotecas equipadas.</p>
      
      <p>As reformas são realizadas integralmente com recursos da empresa, incluindo materiais, mão de obra especializada e equipamentos. Também envolvemos a comunidade local no processo, oferecendo oportunidades de trabalho temporário e capacitação para moradores da região.</p>
      
      <p>O projeto já impactou diretamente mais de 3.500 estudantes, oferecendo melhores condições de ensino e aprendizado. Muitas escolas relataram aumento na frequência escolar e melhoria no rendimento dos alunos após as reformas.</p>
      
      <p>Além das reformas estruturais, também fornecemos mobiliário escolar novo, equipamentos de informática e material pedagógico. O projeto conta com o apoio das secretarias municipais de educação e acompanhamento contínuo dos resultados.</p>
    `,
    image: projeto2,
    startDate: '2022-08-01T08:00:00.000000Z', 
    location: "Interior do Ceará",
    status: "Em andamento",
    beneficiados: 3500,
    categoria: "Educação",
    slug: "reforma-escolas-municipais"
  },
  {
    id: "3",
    title: "Construção de Cisternας - Água para Todos",
    description: "Projeto de construção de cisternas para captação de água da chuva em comunidades rurais do semiárido, garantindo acesso à água potável.",
    content: `
      <p>O projeto "Água para Todos" é uma iniciativa da SS&B Construtora focada na construção de cisternas para captação de água da chuva em comunidades rurais do semiárido cearense, garantindo acesso à água potável durante os períodos de estiagem.</p>
      
      <p>Até o momento, foram construídas 85 cisternas em 15 comunidades rurais, beneficiando diretamente mais de 400 famílias. Cada cisterna tem capacidade para armazenar 16 mil litros de água, suficiente para suprir as necessidades básicas de uma família por até 8 meses.</p>
      
      <p>O projeto utiliza tecnologia social comprovada, com cisternas de placas pré-moldadas que garantem durabilidade e qualidade da água armazenada. Além da construção, oferecemos treinamento para as famílias sobre manutenção das cisternas e uso consciente da água.</p>
      
      <p>A iniciativa conta com parceria de organizações não governamentais locais e tem apoio de programas governamentais de convivência com o semiárido. Todo o processo é acompanhado por técnicos especializados que garantem a qualidade das instalações.</p>
      
      <p>O impacto do projeto vai além do acesso à água, proporcionando melhoria na qualidade de vida, redução de doenças relacionadas ao consumo de água imprópria e fortalecimento da permanência das famílias no campo.</p>
    `,
    image: projeto3,
    startDate: '2023-01-10T12:00:00.000000Z', 
    location: "Semiárido Cearense",
    status: "Em andamento",
    beneficiados: 400,
    categoria: "Acesso à Água",
    slug: "construcao-cisternas"
  },
  {
    id: "4",
    title: "Doação de Materiais de Construção - Casas da Esperança",
    description: "Programa permanente de doação de materiais de construção para famílias em situação de vulnerabilidade reconstruírem ou reformarem suas moradias.",
    content: `
      <p>O programa "Casas da Esperança" é uma iniciativa permanente da SS&B Construtora que doa materiais de construção para famílias em situação de vulnerabilidade social que precisam reconstruir ou reformar suas moradias após desastres naturais ou por necessidades emergenciais.</p>
      
      <p>Mensalmente, selecionamos famílias através de critérios socioeconômicos e visitação técnica, fornecendo cimento, tijolos, telhas, madeira e outros materiais essenciais. O programa já beneficiou mais de 200 famílias em diferentes municípios do Ceará.</p>
      
      <p>Além da doação dos materiais, oferecemos orientação técnica gratuita através de nossos engenheiros e mestres de obra, garantindo que as construções sejam realizadas com segurança e qualidade. Também conectamos as famílias com mão de obra local capacitada.</p>
      
      <p>O programa tem especial foco em famílias chefiadas por mulheres, idosos e pessoas com deficiência. Também priorizamos casos de famílias que perderam suas casas em enchentes, deslizamentos ou outros desastres naturais frequentes na região.</p>
      
      <p>A iniciativa conta com parcerias locais, incluindo igrejas, associações comunitárias e órgãos públicos municipais, que ajudam na identificação das famílias em maior necessidade e no acompanhamento do desenvolvimento dos projetos.</p>
    `,
    image: projeto1,
    startDate: '2022-01-01T00:00:00.000000Z', 
    location: "Todo o Ceará",
    status: "Em andamento",
    beneficiados: 200,
    categoria: "Habitação",
    slug: "casas-da-esperanca"
  },
  {
    id: "5",
    title: "Plantio de Mudas - Verde para o Futuro",
    description: "Campanha de reflorestamento e plantio de mudas nativas em áreas degradadas, contribuindo para a recuperação ambiental e conscientização ecológica.",
    content: `
      <p>A campanha "Verde para o Futuro" é um projeto ambiental da SS&B Construtora focado no reflorestamento e plantio de mudas nativas em áreas degradadas, contribuindo para a recuperação da vegetação local e conscientização sobre preservação ambiental.</p>
      
      <p>Já foram plantadas mais de 5.000 mudas de espécies nativas da Caatinga e Mata Atlântica em parceria com escolas, universidades e organizações ambientais. O projeto inclui ações de educação ambiental e treinamento sobre técnicas de plantio e cuidado com as mudas.</p>
      
      <p>As ações de plantio acontecem mensalmente em diferentes locais, incluindo margens de rios, encostas degradadas, praças públicas e terrenos abandonados. Cada ação envolve voluntários da empresa, estudantes e membros da comunidade local.</p>
      
      <p>Além do plantio, realizamos monitoramento periódico das mudas plantadas, garantindo taxa de sobrevivência superior a 80%. O projeto também inclui oficinas de produção de mudas em viveiros comunitários, capacitando moradores locais.</p>
      
      <p>A iniciativa contribui para a melhoria da qualidade do ar, conservação do solo, proteção de recursos hídricos e criação de corredores ecológicos. Também promove maior conscientização ambiental entre funcionários da empresa e comunidades envolvidas.</p>
    `,
    image: projeto2,
    startDate: '2023-06-01T09:00:00.000000Z', 
    location: "Região Metropolitana de Fortaleza",
    status: "Em andamento",
    beneficiados: 1000,
    categoria: "Meio Ambiente",
    slug: "verde-para-futuro"
  },
  {
    id: "6",
    title: "Biblioteca Móvel - Leitura sem Fronteiras",
    description: "Projeto de biblioteca móvel que leva livros e atividades educativas para comunidades rurais sem acesso a bibliotecas públicas.",
    content: `
      <p>O projeto "Leitura sem Fronteiras" é uma iniciativa cultural da SS&B Construtora que criou uma biblioteca móvel para levar livros, atividades educativas e incentivo à leitura para comunidades rurais que não têm acesso a bibliotecas públicas.</p>
      
      <p>Nossa biblioteca móvel, instalada em um veículo adaptado, visita semanalmente 20 comunidades rurais diferentes, oferecendo acervo de mais de 2.000 livros infantis, juvenis e adultos, além de materiais educativos e jogos pedagógicos.</p>
      
      <p>Durante as visitas, realizamos atividades de contação de histórias, oficinas de redação, saraus literários e empréstimo de livros. As ações são conduzidas por educadores voluntários e bibliotecários parceiros que desenvolvem programação especial para cada faixa etária.</p>
      
      <p>O projeto já atendeu mais de 800 crianças e adultos, contribuindo para o aumento do interesse pela leitura e melhoria dos índices educacionais nas comunidades visitadas. Muitas crianças tiveram seu primeiro contato com livros através desta iniciativa.</p>
      
      <p>Além do empréstimo de livros, o projeto oferece oficinas de criação literária, concursos de redação e pequenas apresentações teatrais. Também mantemos um programa de doação de livros para formação de pequenas bibliotecas comunitárias permanentes.</p>
    `,
    image: projeto3,
    startDate: '2023-09-01T14:00:00.000000Z',
    location: "Interior do Ceará",
    status: "Em andamento",
    beneficiados: 800,
    categoria: "Educação e Cultura",
    slug: "biblioteca-movel"
  },
  {
    id: "7",
    title: "Capacitação Digital - Conectando Gerações",
    description: "Programa de inclusão digital para idosos e pessoas com baixa escolaridade, ensinando o uso básico de computadores e internet.",
    content: `
      <p>O programa "Conectando Gerações" é uma iniciativa de inclusão digital da SS&B Construtora voltada para idosos e pessoas com baixa escolaridade, oferecendo cursos gratuitos de informática básica e uso da internet.</p>
      
      <p>As aulas acontecem em nossa sede e em centros comunitários parceiros, utilizando laboratórios de informática doados pela empresa. O programa já formou mais de 120 pessoas em cursos que incluem navegação na internet, uso de redes sociais, comunicação digital e serviços bancários online.</p>
      
      <p>Os cursos são ministrados por funcionários voluntários da empresa e estagiários de cursos de tecnologia, em turmas pequenas que garantem atenção individualizada. Cada turma tem duração de 3 meses, com aulas duas vezes por semana.</p>
      
      <p>O projeto tem impacto significativo na autonomia dos participantes, permitindo maior independência para realizar serviços digitais, manter contato com familiares distantes e acessar informações importantes. Muitos relatam aumento da autoestima e confiança.</p>
      
      <p>Além das aulas de informática, oferecemos orientação sobre segurança digital, prevenção de golpes virtuais e uso responsável das redes sociais. O programa conta com material didático adaptado e suporte técnico contínuo após a formatura.</p>
    `,
    image: projeto1,
    startDate: '2024-02-01T11:00:00.000000Z', 
    location: "Fortaleza e Região Metropolitana",
    status: "Em andamento",
    beneficiados: 120,
    categoria: "Inclusão Digital",
    slug: "capacitacao-digital"
  },
  {
    id: "8",
    title: "Hortas Comunitárias - Alimentação Saudável",
    description: "Projeto de criação de hortas comunitárias em bairros periféricos, promovendo alimentação saudável e geração de renda para famílias.",
    content: `
      <p>O projeto "Alimentação Saudável" é uma iniciativa da SS&B Construtora focada na criação de hortas comunitárias em bairros periféricos, promovendo acesso a alimentos frescos, alimentação saudável e geração de renda alternativa para famílias em situação de vulnerabilidade.</p>
      
      <p>Já foram implantadas 8 hortas comunitárias em diferentes bairros, cultivando verduras, legumes e ervas medicinais através de técnicas de agricultura orgânica. Cada horta atende entre 15 e 25 famílias, que participam ativamente do plantio, cuidado e colheita.</p>
      
      <p>O projeto fornece sementes, mudas, ferramentas, sistema de irrigação e orientação técnica especializada. As famílias recebem treinamento sobre técnicas de cultivo orgânico, compostagem, controle natural de pragas e aproveitamento total dos alimentos.</p>
      
      <p>Além do consumo familiar, muitas hortas geram excedente que é comercializado em feiras locais, proporcionando renda complementar para as famílias envolvidas. O projeto já beneficiou diretamente mais de 180 famílias e indiretamente toda a comunidade local.</p>
      
      <p>As hortas também se tornaram espaços de convivência e integração comunitária, onde são realizadas oficinas de educação nutricional, culinária saudável e preservação ambiental, fortalecendo os laços sociais entre os participantes.</p>
    `,
    image: projeto2,
    startDate: '2023-04-01T13:30:00.000000Z', 
    location: "Periferia de Fortaleza",
    status: "Em andamento",
    beneficiados: 180,
    categoria: "Alimentação e Renda",
    slug: "hortas-comunitarias"
  }
];

export const getProjetosSociais = () => {
  return projetosSociaisMock.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });
};

export const getProjetoSocialBySlug = (slug: string) => {
  return projetosSociaisMock.find(projeto => projeto.slug === slug);
};

export const getProjetosSociaisPorCategoria = (categoria?: string) => {
  if (!categoria) return getProjetosSociais();
  return projetosSociaisMock.filter(projeto => 
    projeto.categoria.toLowerCase().includes(categoria.toLowerCase())
  );
};