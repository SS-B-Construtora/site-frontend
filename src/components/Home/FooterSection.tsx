import contato from '@/assets/footer/contato.svg';
import endereco from '@/assets/footer/endereco.svg';
import email from '@/assets/footer/email.svg';
import voltar from '@/assets/footer/voltar.svg';
import codigoEticaPdf from '@/assets/certificados/CDVSA-001_Codigo_de_Conduta_Etica_2024.pptx.pdf';

function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  interface LinkItem {
    title: string;
    href: string;
    isExternal?: boolean;
  }

  const Logo = () => (
    <div className="flex flex-col items-center lg:items-start cursor-pointer">
      <img
        className="h-20"
        src="/logo.png"
        alt="Logo SS&B Construtora"
      />
    </div>
  );

  const LinkGroup = ({ title, href, isExternal }: { title: string; href: string; isExternal?: boolean }) => (
    <div>
      {isExternal ? (
        <button
          onClick={() => window.open(href, '_blank')}
          className="text-[#3F4141] hover:text-[#06A956] transition-colors duration-200 font-bold text-lg cursor-pointer"
        >
          {title}
        </button>
      ) : (
        <a
          href={href}
          className="text-[#3F4141] hover:text-[#06A956] transition-colors duration-200 font-bold text-lg"
        >
          {title}
        </a>
      )}
    </div>
  );

  const topRowLinks: LinkItem[] = [
    { title: 'Sobre', href: '/aboutUs' },
    { title: 'Eólicas', href: '/obras?categoria=eolicas' },
    { title: 'Parques Industriais', href: '/obras?categoria=industriais' },
    { title: 'Obras Rodoviárias', href: '/obras?categoria=rodoviarias' },
  ];

  const bottomRowLinks: LinkItem[] = [
    { title: 'Projetos Sociais', href: '/projetos-sociais' },
    { title: 'Notícias', href: '/noticias' },
    { title: 'Locações', href: '/locacoes' },
    { title: 'SGI', href: '/qsms' },
    { title: 'Fale Conosco', href: '/faleconosco' },
    { title: 'Código de Ética', href: codigoEticaPdf, isExternal: true },
  ];

  return (
    <footer
      className="text-white"
      style={{
        background:
          'linear-gradient(140.47deg, #FFFFFF -14.15%, #C5F2DB 113.77%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex-1 lg:ml-8 space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {topRowLinks.map((group, index) => (
                <LinkGroup
                  key={index}
                  title={group.title}
                  href={group.href}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">
              {bottomRowLinks.map((group, index) => (
                <div key={index}>
                  <LinkGroup 
                    title={group.title} 
                    href={group.href} 
                    isExternal={group.isExternal || false} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
					<div className="flex items-start space-x-3 text-left">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 group  p-2 rounded-lg transition-all duration-200"
              aria-label="Voltar ao topo da página"
            >
              <img
                src={voltar}
                alt="Ícone voltar ao topo"
								className='hover:cursor-pointer'
              />
            </button>
          </div>
          <div className="flex items-start space-x-3 text-left">
            <img
              src={contato}
              alt="Ícone telefone"
              className="w-6 h-6 mt-1 flex-shrink-0"
            />
            <div>
              <p className="text-[#3F4141] text-xs lg:text-sm leading-relaxed">
                <a
                  href="tel:+5585991798804"
                  className="hover:text-[#06A956] transition-colors"
                >
                 (85) 9169-9606
                </a>
                <br />
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 text-left">
            <img
              src={email}
              alt="Ícone email"
              className="w-6 h-6 mt-1 flex-shrink-0"
            />
            <div>
              <p className="text-[#3F4141] text-xs lg:text-sm leading-relaxed">
                <a
                  href="mailto:falecom@ssbconstrutora.com.br"
                  className="hover:text-[#06A956] transition-colors break-all"
                >
                  falecom@ssbconstrutora.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-500 flex align-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
          <div className="flex justify-center items-center">
            <div className="text-[#3F4141] text-sm text-center">
              SS&B Construtora - 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
