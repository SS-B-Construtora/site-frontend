import noticia1 from '@/assets/news/noticia1.svg';
import noticia2 from '@/assets/news/noticia2.svg';
import noticia3 from '@/assets/news/noticia3.svg';

import imagem1 from '@/assets/news/imagem1.jpg';
import imagem2 from '@/assets/news/image2.jpg';
import imagem3 from '@/assets/news/image3.jpg';
import ufvpanoramacobra from '@/assets/news/ufvpanoramacobra.jpg';
import ufvbelmonte from '@/assets/news/ufvbelmonte.jpg';
import sublins from '@/assets/news/subestacaolins.jpg';
import cristinoecastro from '@/assets/news/cristinoecastro.jpg';
import ribeiro from '@/assets/news/ribeiro.jpg';
import secristino from '@/assets/news/secristino.jpg';

import { formatDate } from '@/utils/dateUtils';

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

export { formatDate };


export const newsHomeMock: NewsItem[] = [
  {
    id: '1',
    title: 'Central Eólica Volta do Rio',
    description:
      'A SS&B CONSTRUTORA LTDA finalizou com excelência os serviços de infraestrutura na Central Eólica Volta do Rio, localizada no município de Acaraú, no litoral oeste do Ceará, a cerca de 240 km da capital Fortaleza.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA finalizou com excelência os serviços de infraestrutura na Central Eólica Volta do Rio, localizada no município de Acaraú, no litoral oeste do Ceará, a cerca de 240 km da capital Fortaleza. O empreendimento é composto por 28 aerogeradores, totalizando uma capacidade instalada de 42 megawatts, reforçando o compromisso com a geração de energia limpa e sustentável na região.</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <p>A atuação da SS&B envolveu uma série de etapas fundamentais para a implantação do parque eólico:</p>
      <ul>
        <li>Execução de terraplanagem com movimentação de aproximadamente 250 mil metros cúbicos de solo</li>
        <li>Aplicação de sub-base e revestimento em piçarra, somando 60 mil metros cúbicos</li>
        <li>Construção de base em brita corrida, com volume de 12.706 metros cúbicos</li>
        <li>Pavimentação dos acessos internos, fundações e montagem das estruturas em concreto armado que sustentam os aerogeradores</li>
      </ul>
      
      <h3>Tecnologia e conexão ao sistema nacional</h3>
      <p>Cada unidade possui potência nominal de 1.540 kVA, opera com tensão de saída de 690 volts e é projetada para funcionar com ventos de até 11,7 m/s. As torres alcançam 65 metros de altura, otimizando a captação dos ventos predominantes da região. A energia gerada é elevada por uma subestação localizada dentro do próprio parque, equipada com transformador de 45 MVA (34,5 kV/69 kV), que permite a integração direta à Rede Básica do Sistema Interligado Nacional (SIN), garantindo eficiência e confiabilidade na distribuição.</p>
      
      <h3>Compromisso com o futuro energético</h3>
      <p>A Central Eólica Volta do Rio representa mais do que um avanço técnico: é um marco na transição para fontes renováveis e na valorização de matrizes energéticas limpas. A SS&B, com sólida experiência em projetos de infraestrutura para geração sustentável, reafirma seu protagonismo no setor ao contribuir para o fortalecimento da energia eólica no Brasil, especialmente no Nordeste. Cada etapa executada reflete o engajamento da empresa com soluções que respeitam o meio ambiente e impulsionam o desenvolvimento regional.</p>
    `,
    image: imagem2,
    publishedAt: '2025-11-26T00:00:00.000000Z', 
    author: 'SS&B Comunicação',
    category: 'Energia Eólica',
    slug: 'central-eolica-volta-do-rio-acarau-ce',
  },
  {
    id: '2',
    title: 'UFV PANORAMA (COBRA) | Ribeiro Gonçalves – PI',
    description:
      'A SS&B CONSTRUTORA LTDA concluiu com excelência os serviços estruturais na Usina Fotovoltaica Panorama, localizada no município de Ribeiro Gonçalves, no sul do Piauí.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA concluiu com excelência os serviços estruturais na Usina Fotovoltaica Panorama, localizada no município de Ribeiro Gonçalves, no sul do Piauí. O empreendimento integra um dos polos solares mais promissores da região, contribuindo diretamente para a ampliação da matriz de energia limpa no estado. O Complexo Fotovoltaico Panorama (Cobra), possui uma capacidade instalada total de 300 MW (megawatts). O empreendimento é composto por 99 unidades geradoras, divididas em três usinas principais.</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <p>A atuação da empresa contemplou a infraestrutura essencial para o funcionamento do parque solar:</p>
      <ul>
        <li>Execução de 51 fundações das Power Stations, estruturas responsáveis por sustentar os equipamentos elétricos de conversão e distribuição da energia gerada.</li>
      </ul>
      <p>Cada fundação foi projetada e executada para garantir estabilidade, durabilidade e conformidade com as especificações técnicas exigidas para ambientes de alta operação fotovoltaica.</p>
      
      <h3>Infraestrutura estratégica para o sistema energético</h3>
      <p>As Power Stations desempenham papel crucial no processo de transformação da energia captada nos módulos fotovoltaicos. Com a entrega dessas bases, a SS&B reforça sua capacidade técnica em obras complexas e sua atuação crescente no setor solar.</p>
      
      <h3>Compromisso com a transição energética</h3>
      <p>A UFV Panorama representa mais um avanço na expansão da geração renovável no Nordeste. A SS&B reafirma seu compromisso com soluções de engenharia que fortalecem o futuro sustentável, impulsionam a economia regional e contribuem para o desenvolvimento energético do país.</p>
    `,
    image: ufvpanoramacobra,
    publishedAt: '2025-11-25T00:00:00.000000Z',
    author: 'SS&B Comunicação',
    category: 'Energia Solar',
    slug: 'ufv-panorama-cobra-ribeiro-goncalves-pi',
  },
  {
    id: '3',
    title: 'UFVs LINS 03 a 08 (COBRA) | Cristino Castro – PI',
    description:
      'A SS&B CONSTRUTORA LTDA finalizou uma das maiores operações de infraestrutura já realizadas pela empresa no segmento solar, atendendo às UFVs Lins 03 a 08, em Cristino Castro–PI.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA finalizou uma das maiores operações de infraestrutura já realizadas pela empresa no segmento solar, atendendo às UFVs Lins 03 a 08, em Cristino Castro–PI. O empreendimento é parte de um dos mais robustos complexos solares do estado, contribuindo para ampliar a capacidade instalada de energia renovável no Nordeste.</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <p>A execução envolveu etapas fundamentais para a implantação das usinas:</p>
      <ul>
        <li>Supressão vegetal: 550 hectares</li>
        <li>Construção de vias de acesso: 48 km</li>
        <li>Regularização de terreno: 4.476.084,82 m²</li>
        <li>Escavação geral: 117.182,75 m³</li>
        <li>Formação e compactação de aterro: 97.818,06 m³</li>
        <li>Sub-base em solo: 28.631,51 m³</li>
        <li>Drenagem com tubulação PEAD: 3.056 m</li>
      </ul>
      
      <h3>Frota mobilizada</h3>
      <p>A dimensão do empreendimento exigiu uma operação logística de grande porte, com:</p>
      <ul>
        <li>14 escavadeiras hidráulicas</li>
        <li>120 caminhões basculantes</li>
        <li>13 motoniveladoras</li>
        <li>30 caminhões-pipa</li>
        <li>2 pás carregadeiras</li>
        <li>36 rolos compactadores</li>
        <li>5 retroescavadeiras</li>
        <li>6 tratores de pneu</li>
        <li>13 tratores de esteira</li>
      </ul>
      <p>Essa mobilização garantiu agilidade, precisão e cumprimento rigoroso do cronograma.</p>
      
      <h3>Infraestrutura para o avanço da geração solar</h3>
      <p>As obras entregues preparam o terreno e os acessos necessários para instalação das estruturas fotovoltaicas, garantindo segurança, resistência e eficiência ao empreendimento.</p>
      
      <h3>Fortalecimento da transição energética no sertão piauiense</h3>
      <p>A SS&B demonstra mais uma vez sua capacidade técnica ao executar obras de grande magnitude, contribuindo para o avanço da geração solar em uma das regiões mais estratégicas do Brasil para produção de energia renovável.</p>
    `,
    image: cristinoecastro,
    publishedAt: '2025-11-24T00:00:00.000000Z',
    author: 'SS&B Comunicação',
    category: 'Energia Solar',
    slug: 'ufvs-lins-03-a-08-cobra-cristino-castro-pi',
  },
  {
    id: '4',
    title: 'UFV BELMONTE 01 e 02 (COBRA) | São José do Belmonte – PE',
    description:
      'A SS&B CONSTRUTORA LTDA concluiu importantes etapas na UFV Belmonte 01 e 02, localizada em São José do Belmonte–PE. Com área superior a 1.080 hectares e perímetro de 15 km, o empreendimento se destaca como um dos maiores da região.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA concluiu importantes etapas na UFV Belmonte 01 e 02, localizada em São José do Belmonte–PE. Com área superior a 1.080 hectares e perímetro de 15 km, o empreendimento se destaca como um dos maiores da região, reforçando a expansão da energia solar no Nordeste.</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <p>A empresa foi responsável por um conjunto abrangente de obras civis e estruturais:</p>
      <ul>
        <li>Supressão vegetal e terraplanagem integral da área</li>
        <li>Regularização do terreno em toda a extensão</li>
        <li>Sistema de drenagem com aproximadamente 10.000 m³ de concreto</li>
        <li>Construção de acessos e cercamento do empreendimento</li>
        <li>Fundações das Power Stations</li>
        <li>Bases das estações meteorológicas e do sistema de CCTV (2.000 m³ de concreto estrutural)</li>
        <li>Construção do platô para implantação da subestação</li>
      </ul>
      
      <h3>Infraestrutura completa para um dos maiores parques solares de Pernambuco</h3>
      <p>O escopo executado assegura a base física necessária para a montagem dos módulos fotovoltaicos, infraestrutura elétrica e sistemas auxiliares, garantindo segurança, eficiência e durabilidade.</p>
      
      <h3>Compromisso com energia limpa e desenvolvimento regional</h3>
      <p>Com mais este projeto, a SS&B reafirma seu protagonismo na engenharia aplicada à transição energética, contribuindo para a geração sustentável e impulsionando o desenvolvimento econômico do Sertão pernambucano.</p>
    `,
    image: ufvbelmonte,
    publishedAt: '2025-11-23T00:00:00.000000Z',
    author: 'SS&B Comunicação',
    category: 'Energia Solar',
    slug: 'ufv-belmonte-01-e-02-cobra-sao-jose-do-belmonte-pe',
  },
  {
    id: '5',
    title: 'UFV EDP 01 e 02 | Pecém – CE',
    description:
      'A SS&B CONSTRUTORA LTDA executou serviços essenciais para o avanço das UFVs EDP 01 e 02, instaladas na região do Pecém, no Ceará – uma das áreas mais estratégicas para geração renovável e projetos industriais no Nordeste.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA executou serviços essenciais para o avanço das UFVs EDP 01 e 02, instaladas na região do Pecém, no Ceará – uma das áreas mais estratégicas para geração renovável e projetos industriais no Nordeste. As Usinas Fotovoltaicas EDP 01 e 02 possuem uma capacidade total de 6 MW (megawatts).</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <ul>
        <li>Supressão vegetal</li>
        <li>Terraplanagem integral</li>
        <li>Execução do sistema de drenagem</li>
      </ul>
      <p>Essas etapas preparam o solo e garantem as condições necessárias para implantação das estruturas fotovoltaicas e equipamentos elétricos.</p>
      
      <h3>Contribuição para o avanço da geração solar no Ceará</h3>
      <p>Com mais este empreendimento, a SS&B reforça sua atuação na infraestrutura de parques solares e seu compromisso com soluções de engenharia que atendem às demandas crescentes de energia limpa no estado.</p>
    `,
    image: imagem2,
    publishedAt: '2025-11-22T00:00:00.000000Z',
    author: 'SS&B Comunicação',
    category: 'Energia Solar',
    slug: 'ufv-edp-01-e-02-pecem-ce',
  },
  {
    id: '6',
    title: 'SE PANORAMA (COBRA) | Ribeiro Gonçalves – PI',
    description:
      'A SS&B CONSTRUTORA LTDA concluiu a execução do platô e das instalações completas da Subestação Panorama, localizada em Ribeiro Gonçalves–PI. A estrutura é fundamental para o escoamento da energia gerada pelas usinas fotovoltaicas da região.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA concluiu a execução do platô e das instalações completas da Subestação Panorama, localizada em Ribeiro Gonçalves–PI. A estrutura é fundamental para o escoamento da energia gerada pelas usinas fotovoltaicas da região, fortalecendo o sistema elétrico local.</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <ul>
        <li>Construção do platô da subestação</li>
        <li>Execução integral da SE Panorama</li>
      </ul>
      
      <h3>Infraestrutura estratégica para o sistema energético</h3>
      <p>A subestação eleva e distribui a energia produzida no complexo solar, garantindo eficiência, segurança e confiabilidade na integração com o sistema elétrico regional.</p>
      
      <h3>Engenharia a favor da transição energética</h3>
      <p>A SS&B reforça sua presença no setor de subestações e consolida sua contribuição para o avanço da matriz energética limpa no Piauí.</p>
    `,
    image: ribeiro,
    publishedAt: '2025-11-21T00:00:00.000000Z',
    author: 'SS&B Comunicação',
    category: 'Subestação',
    slug: 'se-panorama-cobra-ribeiro-goncalves-pi',
  },
  {
    id: '7',
    title: 'SE CRISTINO CASTRO (COBRA) | Cristino Castro – PI',
    description:
      'A SS&B CONSTRUTORA LTDA finalizou importantes serviços na Subestação Cristino Castro, localizada no sul do Piauí. A estrutura é peça-chave para o escoamento da energia gerada pelos parques solares da região.',
    content: `
      <p>A SS&B CONSTRUTORA LTDA finalizou importantes serviços na Subestação Cristino Castro, localizada no sul do Piauí. A estrutura é peça-chave para o escoamento da energia gerada pelos parques solares da região, fortalecendo a capacidade de distribuição elétrica.</p>
      
      <h3>Serviços executados pela SS&B</h3>
      <ul>
        <li>Concreto usinado 25 MPa: 3.080,08 m³</li>
        <li>Aço: 187.744,06 kg</li>
        <li>Alvenaria: 3.727,80 m²</li>
        <li>Reboco: 3.693,20 m²</li>
        <li>Laje alveolar (11 m de vão): 860 m²</li>
        <li>Montagem mecânica completa</li>
        <li>Execução da malha de aterramento</li>
      </ul>
      
      <h3>Estrutura robusta para expansão da energia solar</h3>
      <p>A combinação de serviços civis e montagem eletromecânica garante a confiabilidade operacional da subestação, consolidando sua importância no sistema de transmissão local.</p>
      
      <h3>SS&B: engenharia que impulsiona o futuro energético</h3>
      <p>A entrega da SE Cristino Castro reforça o compromisso da SS&B com obras de alta complexidade e com o desenvolvimento de infraestrutura essencial para a transição energética.</p>
    `,
    image: secristino,
    publishedAt: '2025-11-20T00:00:00.000000Z',
    author: 'SS&B Comunicação',
    category: 'Subestação',
    slug: 'se-cristino-castro-cobra-cristino-castro-pi',
  },
];

export const getLatestNews = (limit: number = 4): NewsItem[] => {
  return newsHomeMock
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    })
    .slice(0, limit);
};

export const getNewsByCategory = (category: string): NewsItem[] => {
  return newsHomeMock.filter((news) => news.category === category);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsHomeMock.find((news) => news.id === id);
};

export const getNewsBySlug = (slug: string): NewsItem | undefined => {
  return newsHomeMock.find((news) => news.slug === slug);
};