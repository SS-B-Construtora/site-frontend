import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import FooterSection from '@/components/Home/FooterSection';
import imagem from '@/assets/qsms/qsms.svg';

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
                      QSMS
                    </h1>
                  </div>

                  <div className="space-y-2 text-[#3F4141]">
                    <p className="text-[16px] leading-relaxed">
                      A SS&B Construtora Ltda possui um sistema de gestão que
                      integra Qualidade, Meio Ambiente, Saúde e Segurança
                      (QSMS), sendo esse consolidado com a certificação ISO
                      9001:2008 e Siac/PBQP-H nível A.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      A manutenção e monitoramento evolutivo desse sistema
                      proporciona a SS&B um vinculo de estímulo e apoio às boas
                      práticas em suas obras e serviços, bem como um
                      relacionamento mais estreito com seus clientes, parceiros
                      e fornecedores, garantindo o desenvolvimento e a evolução
                      de sua gestão competitiva no âmbito da engenharia,
                      fomentando ações sustentáveis e rentáveis e ações
                      cooperativas que geram valor mútuo para toda cadeia
                      envolvida.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      A empresa estimula ainda a integração, o compartilhamento
                      e o direcionamento do Sistema Integrado em toda a
                      organização, bem como a disseminação de ações de
                      excelência que gerem resultados na sociedade. Para tal,
                      patrocina ações esportivas e de saúde/bem estar. Incentiva
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
                      colaboradores, a SS&B Construtora tem um trabalho
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
      </main>
      <FooterSection />
    </>
  );
}

export default QSMS;
