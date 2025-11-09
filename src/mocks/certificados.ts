import certificado1 from '@/assets/aboutUs/Certificado 1.svg';
import estradas from '@/assets/aboutUs/icons/estradas.svg';
import eolicas from '@/assets/aboutUs/icons/eolica.svg';
import industriais from '@/assets/aboutUs/icons/edificacoes.svg';

import iso9001Pdf from '@/assets/certificados/ISO 9001 - SS&B CONSTRUTORA LTDA - EDITION 03.pdf';
import iso14001Pdf from '@/assets/certificados/ISO 14001 - SS&B CONSTRUTORA LTDA - EDITION 03.pdf';
import iso45001Pdf from '@/assets/certificados/ISO 45001 - SS&B CONSTRUTORA LTDA - EDITION 03.pdf';

export interface CertificadosItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
  pdfUrl: string; 
}

export const certificadosMock: CertificadosItem[] = [
  {
    id: '1',
    title: 'ISO 9001:2015',
    description: 'Certificação de Sistema de Gestão da Qualidade. Garantimos os mais altos padrões de qualidade em todos os nossos processos e serviços.',
    image: certificado1,
    link: iso9001Pdf,
    icon: industriais,
    pdfUrl: iso9001Pdf,
  },
  {
    id: '2',
    title: 'ISO 14001:2015',
    description: 'Certificação de Sistema de Gestão Ambiental. Comprometimento com práticas sustentáveis e responsabilidade ambiental em todas as operações.',
    image: certificado1,
    link: iso14001Pdf,
    icon: eolicas,
    pdfUrl: iso14001Pdf,
  },
  {
    id: '3',
    title: 'ISO 45001:2018',
    description: 'Certificação de Sistema de Gestão de Saúde e Segurança Ocupacional. Priorizamos a segurança e bem-estar de todos os colaboradores.',
    image: certificado1,
    link: iso45001Pdf,
    icon: estradas,
    pdfUrl: iso45001Pdf,
  }
];
