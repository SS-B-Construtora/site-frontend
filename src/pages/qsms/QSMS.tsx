import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import FooterSection from '@/components/Home/FooterSection';
import imagem from '@/assets/qsms/qsms.svg';

const cardData = [
  {
    title: 'Código de Ética',
    description:
      'Conheça o documento que orienta o comportamento ético e profissional da nossa empresa.',
    logo: '⚖️',
    pdf: '/src/assets/politicas/codigoDeEtica.pdf',
    button: 'Visualizar PDF',
  },
  {
    title: 'Gestão Interna',
    description:
      'Saiba como funciona a gestão interna e os processos administrativos da empresa.',
    logo: '⚙️',
    pdf: '/src/assets/politicas/gestaoInterna.pdf',
    button: 'Visualizar PDF',
  },
  {
    title: 'Manual de Gestão',
    description:
      'Confira o manual completo de gestão para colaboradores e gestores.',
    logo: '📢',
    pdf: '/src/assets/politicas/manualDeGestao.pdf',
    button: 'Visualizar PDF',
  },
  {
    title: 'Política de Compliance',
    description:
      'Veja as diretrizes de compliance que garantem integridade e transparência.',
    logo:'📑',
    pdf: '/src/assets/politicas/politicaDeCompilance.pdf',
    button: 'Visualizar PDF',
  },
];

function QSMS() {
  return (
    <>
      <SocialMediaSidebar />
      <main className="pt-[72px] min-h-screen flex flex-col">
        <Head title="Quem Somos - SS&B Construtora" />

        <div className="bg-[#E9F0F0] flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)] lg:items-start">
              <div className="w-full lg:w-1/2 flex items-start lg:items-center">
                <div className="w-full max-w-[550px] space-y-6 py-12 lg:py-16 text-left">
                  <div className="space-y-3">
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                      SGI
                    </h1>
                  </div>

                  <div className="space-y-2 text-[#3F4141]">
                    <p className="text-[16px] leading-relaxed">
                      A SS&amp;B Construtora possui um sistema de gestão que
                      integra Qualidade, Meio Ambiente, Saúde e Segurança (SGI),
                      sendo esse consolidado com a certificação ISO 9001:2008 e
                      Siac/PBQP-H nível A.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      A manutenção e monitoramento evolutivo desse sistema
                      proporciona a SS&amp;B um vinculo de estímulo e apoio às
                      boas práticas em suas obras e serviços, bem como um
                      relacionamento mais estreito com seus clientes, parceiros
                      e fornecedores, garantindo o desenvolvimento e a evolução
                      de sua gestão competitiva no âmbito da engenharia,
                      fomentando Ações sustentáveis e rentáveis e ações
                      cooperativas que geram valor mútuo para toda cadeia
                      envolvida.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      A empresa estimula ainda a integração, o compartilhamento
                      e o direcionamento do Sistema Integrado em toda a
                      organização, bem como a disseminação de ações de
                      excelência que gerem resultados na sociedade. Para tal,
                      patrocina Ações esportivas e de saúde/bem estar. Incentiva
                      a capacitação profissional de seus colaboradores e
                      participação nos lucros.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      O Sistema QSMS está alicerçado sobre um conjunto de
                      valores fundamentais e estruturado num planejamento
                      Estratégico que expressa a compreensão da empresa sobre
                      sua visão de Excelência.
                    </p>

                    <div className="space-y-3 mt-8 lg:mt-12">
                      <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                        Treinamento
                      </h1>
                    </div>

                    <p className="text-[16px] leading-relaxed">
                      Visando sempre a segurança e desenvolvimento de seus
                      colaboradores, a SS&amp;B Construtora tem um trabalho
                      constante de realizar treinamentos com suas equipes e
                      mantê-los sempre capacitados para atuar em suas atividades
                      da melhor forma e com o máximo de segurança.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-64 lg:h-auto flex items-start lg:items-center justify-center lg:justify-end lg:pr-0 mt-8 lg:mt-0 lg:pt-12">
                <div className="w-80 h-80 lg:w-full lg:h-[550px] lg:flex lg:justify-end">
                  <img
                    src={imagem}
                    alt="História da SS&B Construtora"
                    className="w-full h-full object-cover rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl lg:shadow-l-2xl"
                  />
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
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium w-full text-center"
                  >
                    {card.button}
                  </a>
                  <a
                    href={card.pdf}
                    download
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition-colors font-medium w-full text-center"
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
