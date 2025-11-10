export interface Equipamento {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
}

export const tratores: Equipamento[] = [
  {
    id: "trator-01",
    titulo: "Trator Caterpillar D6T",
    descricao: "Trator de esteiras robusto e versátil, ideal para trabalhos de terraplenagem, nivelamento e movimentação de terra. Equipado com motor de alta performance e sistema hidráulico eficiente.",
    imagem: "/src/assets/locacoes/trator-caterpillar-d6t.jpg"
  },
  {
    id: "trator-02",
    titulo: "Trator John Deere 6145R",
    descricao: "Trator agrícola de alta performance com tecnologia avançada, perfeito para operações de campo e trabalhos de agricultura. Motor potente e sistema de transmissão automática.",
    imagem: "/src/assets/locacoes/trator-john-deere-6145r.jpg"
  },
  {
    id: "trator-03",
    titulo: "Trator Komatsu D65PX",
    descricao: "Trator de esteiras para trabalhos pesados de construção civil. Excelente capacidade de tração e estabilidade em terrenos irregulares.",
    imagem: "/src/assets/locacoes/trator-komatsu-d65px.jpg"
  }
];

export const rolos: Equipamento[] = [
  {
    id: "rolo-01",
    titulo: "Rolo Compactador CAT CB64",
    descricao: "Rolo compactador vibratório duplo, ideal para compactação de asfalto e materiais granulares. Sistema de vibração ajustável e excelente visibilidade do operador.",
    imagem: "/src/assets/locacoes/rolo-cat-cb64.jpg"
  },
  {
    id: "rolo-02",
    titulo: "Rolo Compactador Dynapac CA2500D",
    descricao: "Rolo compactador de alta capacidade para grandes obras. Equipado com sistema de aspersão automática e controle de vibração inteligente.",
    imagem: "/src/assets/locacoes/rolo-dynapac-ca2500d.jpg"
  },
  {
    id: "rolo-03",
    titulo: "Rolo Compactador Bomag BW213D",
    descricao: "Rolo compactador versátil com excelente desempenho em diferentes tipos de solo. Sistema hidráulico eficiente e cabine ergonômica.",
    imagem: "/src/assets/locacoes/rolo-bomag-bw213d.jpg"
  }
];

export const motoniveladores: Equipamento[] = [
  {
    id: "motoniveladora-01",
    titulo: "Motoniveladora CAT 140M",
    descricao: "Motoniveladora de alta precisão para trabalhos de acabamento e nivelamento. Sistema de controle avançado e lâmina com posicionamento automático.",
    imagem: "/src/assets/locacoes/motoniveladora-cat-140m.jpg"
  },
  {
    id: "motoniveladora-02",
    titulo: "Motoniveladora Volvo G976",
    descricao: "Motoniveladora robusta com excelente capacidade de nivelamento. Motor econômico e sistema hidráulico de alta performance.",
    imagem: "/src/assets/locacoes/motoniveladora-volvo-g976.jpg"
  },
  {
    id: "motoniveladora-03",
    titulo: "Motoniveladora Komatsu GD555-5",
    descricao: "Motoniveladora para trabalhos de precisão em estradas e terraplanagem. Controle joystick intuitivo e sistema de posicionamento GPS.",
    imagem: "/src/assets/locacoes/motoniveladora-komatsu-gd555.jpg"
  }
];

export const escavadeiras: Equipamento[] = [
  {
    id: "escavadeira-01",
    titulo: "Escavadeira CAT 320D2L",
    descricao: "Escavadeira hidráulica de médio porte para diversos tipos de trabalho. Excelente alcance e força de escavação, ideal para construção civil e infraestrutura.",
    imagem: "/src/assets/locacoes/escavadeira-cat-320d2l.jpg"
  },
  {
    id: "escavadeira-02",
    titulo: "Escavadeira Volvo EC380E",
    descricao: "Escavadeira de grande porte com alta produtividade. Sistema hidráulico inteligente e baixo consumo de combustível.",
    imagem: "/src/assets/locacoes/escavadeira-volvo-ec380e.jpg"
  },
  {
    id: "escavadeira-03",
    titulo: "Escavadeira Komatsu PC210LC-10",
    descricao: "Escavadeira versátil com excelente desempenho operacional. Cabine confortável e sistema de monitoramento avançado.",
    imagem: "/src/assets/locacoes/escavadeira-komatsu-pc210lc.jpg"
  },
  {
    id: "escavadeira-04",
    titulo: "Mini Escavadeira CAT 308E2",
    descricao: "Mini escavadeira compacta para trabalhos em espaços reduzidos. Ideal para obras urbanas, paisagismo e serviços de utilidades.",
    imagem: "/src/assets/locacoes/mini-escavadeira-cat-308e2.jpg"
  }
];

// Manipuladores Telescópicos
export const manipuladores: Equipamento[] = [
  {
    id: "manipulador-01",
    titulo: "Manipulador Telescópico CAT TH408D",
    descricao: "Manipulador telescópico versátil para elevação e movimentação de materiais. Alcance máximo de 8 metros e capacidade de carga de 4 toneladas.",
    imagem: "/src/assets/locacoes/manipulador-cat-th408d.jpg"
  },
  {
    id: "manipulador-02",
    titulo: "Manipulador Telescópico JCB 540-170",
    descricao: "Manipulador telescópico de alta performance com excelente estabilidade. Sistema hidráulico Load Sensing e transmissão automática.",
    imagem: "/src/assets/locacoes/manipulador-jcb-540-170.jpg"
  },
  {
    id: "manipulador-03",
    titulo: "Manipulador Telescópico Bobcat TL470",
    descricao: "Manipulador telescópico compacto e ágil. Perfeito para trabalhos de construção civil, agricultura e manuseio de materiais.",
    imagem: "/src/assets/locacoes/manipulador-bobcat-tl470.jpg"
  },
  {
    id: "manipulador-04",
    titulo: "Manipulador Telescópico New Holland LM9.35",
    descricao: "Manipulador telescópico robusto com alta capacidade de elevação. Sistema de controle eletrônico e cabine pressurizada.",
    imagem: "/src/assets/locacoes/manipulador-new-holland-lm935.jpg"
  }
];

export const equipamentosPorTipo = {
  tratores,
  rolos,
  motoniveladores,
  escavadeiras,
  manipuladores
};

export const todosEquipamentos: Equipamento[] = [
  ...tratores,
  ...rolos,
  ...motoniveladores,
  ...escavadeiras,
  ...manipuladores
];

export const getEquipamentosPorTipo = (tipo: string): Equipamento[] => {
  const tipoLower = tipo.toLowerCase();
  
  if (tipoLower.includes('trator')) return tratores;
  if (tipoLower.includes('rolo')) return rolos;
  if (tipoLower.includes('motonivelador')) return motoniveladores;
  if (tipoLower.includes('escavadeira')) return escavadeiras;
  if (tipoLower.includes('manipulador')) return manipuladores;
  
  return [];
};

export const getEquipamentoPorId = (id: string): Equipamento | undefined => {
  return todosEquipamentos.find((equipamento: Equipamento) => equipamento.id === id);
};

export const tiposEquipamentos = [
  "Trator",
  "Rolo",
  "Motoniveladora", 
  "Escavadeira",
  "Manipulador"
];
