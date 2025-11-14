import { Head } from '@/components/Head';
import FooterSection from '@/components/Home/FooterSection';
import ContactSection from '@/components/Home/ContactSection';
import PDFPreview from '@/components/PDFPreview';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';

import about from '@/assets/aboutUs/aboutus.svg';

import about1 from '@/assets/aboutUs/about1.svg';
import about2 from '@/assets/aboutUs/about2.svg';
import about3 from '@/assets/aboutUs/about3.svg';
import about4 from '@/assets/aboutUs/about4.svg';
import { certificadosMock } from '@/mocks/certificados';

export function AboutUs() {
  return (
    <>
      <SocialMediaSidebar />
      <main className="">
        <Head title="Quem Somos - SS&B Construtora" />

        <div className="bg-[#E9F0F0]">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[700px]">
              <div className="w-full lg:w-1/2 flex items-center">
                <div className="w-full max-w-[550px] space-y-6 py-12 lg:py-16 text-center lg:text-left mx-auto lg:mx-0">
                  <div className="space-y-3">
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                      SS&B <br /><span>Construtora </span>
                    </h1>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#06A956] leading-tight">
                      
                    </h2>
                  </div>

                  <div className="space-y-1 text-[#3F4141]">
                    <p className="text-[16px] leading-relaxed">
                      A SS&B Construtora é fruto de três gerações de uma
                      família de construtores que iniciou em 1905 com o Sr.
                      Antonio Salles, que construía barragens com caixotes de
                      madeira amarrados em cangalhas, sobre jegues. Fez pequenos
                      açudes no interior do Ceará e fixou residência na cidade de
                      Itapipoca.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      Em meados de 1944, seu filho, o Sr. Benedito Orígenes
                      Salles, formou-se em Engenharia Civil em Belo Horizonte.
                      Nascido e criado no sertão do Ceará no município de
                      Itapipoca, segue em 1955 para a cidade do Rio de Janeiro
                      para trabalhar na Construtora Inúbia de um parente seu, onde
                      viveu durante 30 anos, construindo edifícios no Rio e São
                      Paulo, além de obras públicas no Nordeste.
                    </p>

                    <p className="text-[16px] leading-relaxed">
                      Em 1970, funda a Construtora Salles Furlani com seu sobrinho
                      Ruben Sergio Furlani, que há pouco havia se graduado
                      engenheiro civil em Campina Grande - PB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-64 lg:h-auto flex items-center justify-center lg:justify-end lg:pr-0">
                <div className="w-80 h-80 lg:w-full lg:h-[550px] lg:flex lg:justify-end">
                  <img
                    src={about}
                    alt="História da SS&B Construtora"
                    className="w-full h-full object-cover rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl lg:shadow-l-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E9F0F0]">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 lg:py-8">
            <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group">
                <img
                  src={about1}
                  alt="Marco histórico da SS&B Construtora"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="group">
                <img
                  src={about2}
                  alt="Evolução da empresa ao longo dos anos"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="group">
                <img
                  src={about3}
                  alt="Projetos realizados pela SS&B"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="group">
                <img
                  src={about4}
                  alt="Equipe e maquinários da construtora"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#E9F0F0]">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
              <div className="w-full space-y-1 py-12 lg:py-16 text-center lg:text-left">
                <p className="text-[16px] leading-relaxed text-[#3F4141]">
                  Em fevereiro de 1993, é fundada a Construtora Silveira Salles
                  Ltda dando continuidade às atividades no ramo da Construção
                  Civil, executando obras de Terraplenagem, Pavimentação de
                  Estradas, Barragens, Obras Privadas e de Infra-Estrutura em
                  geral, tendo como clientes as principais instituições públicas
                  como Prefeituras Municipais de Fortaleza e interior, DERT,
                  DNIT e Setor Privado.
                </p>

                <p className="text-[16px] leading-relaxed text-[#3F4141]">
                  Em 2001, o Sr. Julio Salles começa a executar obras do Setor
                  Privado de forma independente e em 2008 inicia formalmente uma
                  nova empresa - SS&B Construtora - que vem aprimorando
                  seus conhecimentos investindo em seu quadro de funcionários e
                  aperfeiçoando-se a cada dia. Buscando a excelência em todas as
                  suas atividades dentro e fora da Indústria da Construção Civil
                  visando a plena satisfação de seus clientes, garantindo
                  qualidade, agilidade e respeito ao meio ambiente e a
                  comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background:
              'linear-gradient(124.1deg, #3F4141 -8.3%, #02351B 101.42%)',
          }}
          className="py-16 lg:py-24"
        >
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="mb-6">
              <h1 className="text-[#06A956] text-3xl lg:text-5xl font-bold mb-2">
                Certificações
              </h1>
              <p className="text-white text-lg lg:text-2xl">
                Veja nossas certificações
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:overflow-x-auto gap-6 mb-8 scrollbar-hide">
              {certificadosMock.map((item) => (
                <div
                  key={item.id}
                  onClick={() => window.open(item.link, '_blank')}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300 relative group rounded-lg bg-white overflow-hidden cursor-pointer w-full lg:w-[340px] lg:flex-shrink-0"
                >
                  <div className="w-full lg:w-[340px]">
                    <div className="relative w-full h-[200px] overflow-hidden">
                      <PDFPreview
                        file={item.pdfUrl}
                        width={340}
                        height={200}
                        className="w-full h-full"
                      />
                    </div>

                    <div
                      className="relative h-[150px] flex items-center justify-between px-4 py-3"
                      style={{
                        background:
                          'linear-gradient(180deg, #06A956 -53.46%, #03562C 168.08%)',
                      }}
                    >
                      <div className="flex-1 text-white">
                        <h3 className="font-semibold text-lg mb-">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90 line-clamp-2">
                          {item.description}
                        </p>
                        <button 
                          onClick={() => window.open(item.link, '_blank')}
                          className="text-white border border-white p-1 mb-2 rounded-md mt-4 hover:text-[#06A956] hover:bg-white transition-colors duration-200 font-bold"
                        >
                          Ver certificação
                        </button>
                      </div>

                      <div className="ml-4 flex-shrink-0">
                        <img
                          src={item.icon}
                          alt={`Ícone ${item.title}`}
                          className="w-30 h-30 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
