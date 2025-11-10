import brinde from '@/assets/projetosSociais/brinde.png';
import motosserra from '@/assets/projetosSociais/motosserra.jpg';
import poco from '@/assets/projetosSociais/poco.png';
import surf from '@/assets/projetosSociais/surf.png';

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
    id: '1',
    title: 'Programa Construindo o Futuro - Capacitação Profissional',
    description:
      ' SS&B Construtora reforça seu compromisso com o desenvolvimento social ao patrocinar o aprendizado em inglês de 12 mulheres da Taíba, no Ceará. O projeto, que […]',
    content: `
      A SS&B Construtora reforça seu compromisso com o desenvolvimento social ao patrocinar o aprendizado em inglês de 12 mulheres da Taíba, no Ceará. O projeto, que terá duração de um ano, busca ampliar oportunidades e fortalecer o protagonismo feminino na comunidade.
Para a construtora, construir vai além das obras — é também sobre criar futuro, gerar oportunidades e inspirar histórias reais. Cada participante está iniciando uma nova jornada de conhecimento e empoderamento, e a SS&B celebra fazer parte dessa transformação.
    `,
    image: surf,
    startDate: '2023-03-15T10:00:00.000000Z',
    location: 'Fortaleza, CE',
    status: 'Em andamento',
    beneficiados: 150,
    categoria: 'Capacitação Profissional',
    slug: 'programa-construindo-futuro',
  },
  {
    id: '2',
    title: 'Reforma de Escolas Municipais - Educação de Qualidade',
    description:
      'A SS&B Construtora sempre visando o bem-estar da população e excelência em suas atividades, realizou a perfuração de um poço profundo para a comunidade que vive […]',
    content: `
      <p>A SS&B Construtorasempre visando o bem-estar da população e excelência em suas atividades, realizou a perfuração de um poço profundo para a comunidade que vive nas proximidades da obra realizada no município de Aracati.</p>
      
      <p>É sempre com grande prazer que a SS&B Construtora realiza ações para proporcionar uma melhoria na qualidade da vida das pessoas, de forma que impacte positivamente.</p>
      
    `,
    image: poco,
    startDate: '2022-08-01T08:00:00.000000Z',
    location: 'Interior do Ceará',
    status: 'Em andamento',
    beneficiados: 3500,
    categoria: 'Educação',
    slug: 'reforma-escolas-municipais',
  },
  {
    id: '3',
    title: 'Escola Beneficente de Surf Moura Brasil',
    description:
      'A SS&B Construtora apadrinhou a Escola Beneficente de Surf Moura Brasil, onde desenvolve diversos projetos sociais, voltados para a capacitação profissional dos alunos, ofertando cursos gratuitos, […]',
    content: `
      <p>O projeto "Água para Todos" é uma iniciativa da SS&B Construtora focada na construção de cisternas para captação de água da chuva em comunidades rurais do semiárido cearense, garantindo acesso à água potável durante os períodos de estiagem.</p>
      
      <p>Até o momento, foram construídas 85 cisternas em 15 comunidades rurais, beneficiando diretamente mais de 400 famílias. Cada cisterna tem capacidade para armazenar 16 mil litros de água, suficiente para suprir as necessidades básicas de uma família por até 8 meses.</p>
      
      <p>O projeto utiliza tecnologia social comprovada, com cisternas de placas pré-moldadas que garantem durabilidade e qualidade da água armazenada. Além da construção, oferecemos treinamento para as famílias sobre manutenção das cisternas e uso consciente da água.</p>
      
      <p>A iniciativa conta com parceria de organizações não governamentais locais e tem apoio de programas governamentais de convivência com o semiárido. Todo o processo é acompanhado por técnicos especializados que garantem a qualidade das instalações.</p>
      
      <p>O impacto do projeto vai além do acesso à água, proporcionando melhoria na qualidade de vida, redução de doenças relacionadas ao consumo de água imprópria e fortalecimento da permanência das famílias no campo.</p>
    `,
    image: surf,
    startDate: '2023-01-10T12:00:00.000000Z',
    location: 'Semiárido Cearense',
    status: 'Em andamento',
    beneficiados: 400,
    categoria: 'Acesso à Água',
    slug: 'construcao-cisternas',
  },
  {
    id: '4',
    title: 'Treinamento com Motosserra',
    description:
      'A SS&B Construtora sempre em busca da melhoria contínua, realiza periodicamente um trabalho social de capacitar profissionais a realizarem atividades de poda e utilização de motosserra. […]',
    content: `
     A SS&B Construtora sempre em busca da melhoria contínua, realiza periodicamente um trabalho social de capacitar profissionais a realizarem atividades de poda e utilização de motosserra.
O treinamento é ofertado de forma gratuita, com professores especializados e prontos para garantirem a segurança dos alunos. Esse é mais um projeto desenvolvido e realizado pelo setor de QSMS.
    `,
    image: motosserra,
    startDate: '2022-01-01T00:00:00.000000Z',
    location: 'Todo o Ceará',
    status: 'Em andamento',
    beneficiados: 200,
    categoria: 'Habitação',
    slug: 'casas-da-esperanca',
  },
  {
    id: '5',
    title: 'Distribuição de Brindes',
    description:
      'A SS&B Construtora tem como política o respeito e o dever de ajudar comunidades e famílias vulneráveis. Tendo isso em vista, a SS&B tem o costume […]',
    content: `
      A SS&B Construtora tem como política o respeito e o dever de ajudar comunidades e famílias vulneráveis. Tendo isso em vista, a SS&B tem o costume de realizar doações de alimentos, produtos de higiene pessoal, brinquedos e realizar ações sociais nas comunidades do entorno de suas obras.

Esse pensamento humanizado é que faz os colaboradores e conhecedores da marca a admirarem tanto.
    `,
    image: brinde,
    startDate: '2023-06-01T09:00:00.000000Z',
    location: 'Região Metropolitana de Fortaleza',
    status: 'Em andamento',
    beneficiados: 1000,
    categoria: 'Meio Ambiente',
    slug: 'verde-para-futuro',
  },
];

export const getProjetosSociais = () => {
  return projetosSociaisMock.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });
};

export const getProjetoSocialBySlug = (slug: string) => {
  return projetosSociaisMock.find((projeto) => projeto.slug === slug);
};

export const getProjetosSociaisPorCategoria = (categoria?: string) => {
  if (!categoria) return getProjetosSociais();
  return projetosSociaisMock.filter((projeto) =>
    projeto.categoria.toLowerCase().includes(categoria.toLowerCase()),
  );
};
