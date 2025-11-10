import estradas from '@/assets/aboutUs/icons/estradas.svg';
import eolicas from '@/assets/aboutUs/icons/eolica.svg';
import edificacoes from '@/assets/aboutUs/icons/edificacoes.svg';

import bgObras from '@/assets/obras/bgmock.svg';

export interface ObraDetalhes {
  id: string;
  nome: string;
  imagens: string[];
}

export interface ObrasItem {
  id: string;
  category: string;
  icon: string;
  obras: ObraDetalhes[];
}

export const obrasMockData: ObrasItem[] = [
  {
    id: 'parques-eolicos',
    category: 'PARQUES EÓLICOS',
    icon: eolicas,
    obras: [
      {
        id: 'parque-eolico-ventos-sul',
        nome: 'Parque Eólico Ventos do Sul',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'complexo-eolico-serra-grande',
        nome: 'Complexo Eólico Serra Grande',
        imagens: [
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'parque-eolico-campos-verdes',
        nome: 'Parque Eólico Campos Verdes',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      }
    ]
  },
  {
    id: 'parques-industriais',
    category: 'PARQUES INDUSTRIAIS',
    icon: edificacoes,
    obras: [
      {
        id: 'parque-industrial-norte',
        nome: 'Parque Industrial Norte',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'distrito-industrial-sul',
        nome: 'Distrito Industrial Sul',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'complexo-logistico-oeste',
        nome: 'Complexo Logístico Oeste',
        imagens: [
          bgObras,
          bgObras,
          bgObras
        ]
      }
    ]
  },
  {
    id: 'obras-rodoviarias',
    category: 'OBRAS RODOVIÁRIAS',
    icon: estradas,
    obras: [
      {
        id: 'br-101-trecho-norte',
        nome: 'BR-101 - Trecho Norte',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'rodovia-estadual-rs-235',
        nome: 'Rodovia Estadual RS-235',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'ponte-rio-taquari',
        nome: 'Ponte sobre Rio Taquari',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      }
    ]
  },
  {
    id: 'terraplanagem-pavimentacao',
    category: 'TERRAPLANAGEM E PAVIMENTAÇÃO',
    icon: estradas, // Usando o mesmo ícone temporariamente
    obras: [
      {
        id: 'terraplanagem-distrito-leste',
        nome: 'Terraplanagem Distrito Leste',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'pavimentacao-avenida-central',
        nome: 'Pavimentação Avenida Central',
        imagens: [
          bgObras,
          bgObras,
          bgObras,
          bgObras
        ]
      },
      {
        id: 'nivelamento-area-comercial',
        nome: 'Nivelamento Área Comercial',
        imagens: [
          bgObras,
          bgObras,
          bgObras
        ]
      }
    ]
  }
];

export const getObraPorId = (id: string): ObraDetalhes | null => {
  for (const categoria of obrasMockData) {
    const obra = categoria.obras.find((obra: ObraDetalhes) => obra.id === id);
    if (obra) return obra;
  }
  return null;
};
