import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import FooterSection from '@/components/Home/FooterSection';
import imagem from '@/assets/qsms/qsms.svg';
import codigo from '@/assets/politicas/codigoDeEtica.pdf';
import gestao from '@/assets/politicas/gestaoInterna.pdf';
import manual from '@/assets/politicas/manualDeGestao.pdf';
import compliance from '@/assets/politicas/politicaDeCompilance.pdf';

const cardData = [
  {
    title: 'Código de Ética',
    description:
      'Conheça o documento que orienta o comportamento ético e profissional da nossa empresa.',
    logo: '⚖️',
    pdf: "https://drive.google.com/file/d/1gZo-Lr9A_YG4lpcUSr1LDkibeLkIcZCT/view?usp=drive_link",
    button: 'Visualizar PDF',
  },
  {
    title: 'Gestão Interna',
    description:
      'Saiba como funciona a gestão interna e os processos administrativos da empresa.',
    logo: '⚙️',
    pdf: "https://drive.google.com/file/d/10mRRXoODoLIgktUPWbaNOpDuny2ECrHA/view?usp=drive_link",
    button: 'Visualizar PDF',
  },
  {
    title: 'Manual de Gestão',
    description:
      'Confira o manual completo de gestão para colaboradores e gestores.',
    logo: '📢',
    pdf: 'https://drive.google.com/file/d/1fy9gFHLkwL7-Qn8m2Yw4tfFoQ4sNiUej/view?usp=drive_link',
    button: 'Visualizar PDF',
  },
  {
    title: 'Política de Compliance',
    description:
      'Veja as diretrizes de compliance que garantem integridade e transparência.',
    logo:'📑',
    pdf: 'https://drive.google.com/file/d/1FZezV60Zo_koxMBftxVfQoH8_3N5BZC0/view?usp=drive_link',
    button: 'Visualizar PDF',
  },
];

function QSMS() {
  return (
    <>
      <SocialMediaSidebar />
      <main className=" min-h-screen flex flex-col">
        <Head title="Quem Somos - SS&B Construtora" />

        <div className="bg-[#E9F0F0] flex-grow mt-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="w-full  flex items-start lg:items-center">
                <div className="w-full space-y-6 py-12 lg:py-16 text-left">
                  <div className="space-y-3">
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                      SGI
                    </h1>
                  </div>

                  <div className="space-y-4 text-[#3F4141]">
                    <p className="text-[16px] leading-relaxed">
                      Sistema de Gestão Integrado (SGI): Excelência que Gera Resultados Reais
Na SS&B Construtora, acreditamos que construir com qualidade vai além da entrega da obra. Por isso, implantamos e mantemos um Sistema de Gestão Integrado (SGI) certificado nas normas internacionais ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018, que une Qualidade, Meio Ambiente, Saúde e Segurança em uma gestão sólida e em constante evolução.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      Esse compromisso garante:
                       </p>
                         <p className="text-[16px] leading-relaxed">✅ Eficiência e produtividade em todas as etapas dos projetos;</p>
                         <p className="text-[16px] leading-relaxed">✅ Sustentabilidade e responsabilidade socioambiental, preservando recursos e comunidades;</p>
                         <p className="text-[16px] leading-relaxed">✅ Segurança e bem-estar dos colaboradores, clientes e parceiros;</p>
                         <p className="text-[16px] leading-relaxed">✅ Transparência e confiança, fortalecendo relacionamentos de longo prazo.</p>
                   

                    <p className="text-[16px] leading-relaxed">
                      Nosso SGI é mais que um sistema: é uma cultura organizacional que promove inovação, práticas sustentáveis e soluções de engenharia que realmente entregam valor agregado ao cliente e ao mercado.
                    </p>

                 

                    <div className="space-y-3 mt-8 lg:mt-12">
                      <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                        Treinamentos e Capacitação Contínua 
                      </h1>
                    </div>

                    <p className="text-[16px] leading-relaxed">
                      Acreditamos que obras seguras e de qualidade começam pelas pessoas.
Por isso, investimos em treinamentos constantes, mantendo nossas equipes atualizadas e capacitadas para atuar com excelência técnica e máxima segurança.
                    </p>
                    <div className="space-y-3 mt-8 lg:mt-12">
                      <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                        Corpo técnico
                      </h1>
                    </div>

                    <p className="text-[16px] leading-relaxed">
                        A SS&B Construtora conta com um corpo técnico multidisciplinar formado por equipe fixa (staff) altamente qualificada, que atua de forma integrada em todas as etapas dos projetos. Nossa estrutura reúne Engenheiros Civis, responsáveis pela precisão construtiva; Engenheiro Mecânico, que assegura a eficiência dos processos e equipamentos; Engenheiro de Qualidade, voltado para o cumprimento rigoroso das normas e padrões técnicos; Engenheira Ambiental e Sanitarista, que promove práticas sustentáveis e responsáveis; e Engenheiro de Segurança do Trabalho, comprometido com a integridade e o bem-estar de todos os envolvidos.

Além da equipe de engenharia, dispomos de profissionais administrativos preparados e de uma linha de frente composta por Técnicos de Meio Ambiente e Técnicos de Segurança, que acompanham de perto a execução em campo, garantindo excelência e conformidade em cada atividade.

Essa integração de competências dentro de um staff fixo assegura que a SS&B entregue soluções completas, seguras e sustentáveis, gerando valor agregado e fortalecendo a confiança de nossos clientes.  
 </p>
 <div className="space-y-3 mt-8 lg:mt-12">
                      <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                        Reconhecimento e Valorização
                      </h1>
                    </div>

                    <p className="text-[16px] leading-relaxed">
                       Na SS&B, reconhecemos que o capital humano é o maior patrimônio da empresa.
Premiamos e valorizamos nossos colaboradores com base em critérios como:

 </p>
 <p>
  Proatividade
 </p>
 <p>
  Produção
 </p>
 <p>
  Segurança
 </p>
 <p>
  Qualidade
</p>
<p>
  Meio Ambiente
</p>

 <p className="text-[16px] leading-relaxed">
                      Essa cultura de reconhecimento motiva, gera engajamento e reflete diretamente em obras mais ágeis, seguras e sustentáveis.

 </p>
 <p className="text-[16px] leading-relaxed">Por que escolher a SS&B Construtora?</p>
<p>✔ SGI certificado nas principais normas internacionais;</p>
<p>✔ Equipes capacitadas e constantemente treinadas;</p>
<p>✔ Compromisso com segurança, meio ambiente e qualidade;</p>
<p>✔ Soluções que unem sustentabilidade e rentabilidade;</p>
<p>✔ Relacionamentos sólidos baseados em confiança e resultados</p>
                  </div>
                  
                </div>
              </div>

             
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full"
              >
                <h1 className="text-4xl mb-4 h-10">
                  {card.logo}
                </h1>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {card.description}
                </p>
                <div className="mt-auto w-full flex flex-col gap-2 items-center">
                  <a
                    href={card.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors font-medium w-full text-center"
                  >
                    {card.button}
                  </a>
                  <a
                    href={card.pdf}
                    download
                    className="bg-blue-100 text-green-700 px-4 py-2 rounded hover:bg-blue-200 transition-colors font-medium w-full text-center"
                  >
                    Baixar PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

export default QSMS;
