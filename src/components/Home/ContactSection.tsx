import imagem from '@/assets/contact/tratorContato.svg';
function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="bg-[#E9F0F0]">
      <div className="flex flex-col lg:flex-row items-stretch justify-start relative min-h-[700px] lg:h-[600px]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex-1 flex items-center w-full px-4 sm:px-6 lg:px-8 z-10 py-16 lg:py-12">
            <div className="w-full max-w-none lg:max-w-[500px] xl:max-w-[550px]">
              <h2
                id="contact-heading"
                className="text-4xl lg:text-4xl xl:text-5xl font-bold text-[#3F4141] leading-relaxed text-left"
              >
                Ficou <span className="text-[#06A956]">interessado?</span>
              </h2>
              <p className="mt-4 text-2xl lg:text-2xl xl:text-3xl font-bold text-[#3F4141] leading-relaxed text-left">
                Entre em contato conosco
              </p>
              <div className="w-full mt-8 lg:mt-6">
                <form className="w-full space-y-6 lg:space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-[#3F4141] font-bold text-lg lg:text-lg xl:text-[1.2em]">
                      Nome:
                    </label>
                    <input
                      name="nome"
                      type="text"
                      placeholder="Digite aqui seu nome e sobrenome"
                      className="w-full p-4 lg:p-3 border border-gray-300 rounded-md bg-[#DCE3E3] h-14 lg:h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[#3F4141] font-bold text-lg lg:text-lg xl:text-[1.2em]">
                      E-mail:
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Digite aqui seu e-mail"
                      className="w-full p-4 lg:p-3 border border-gray-300 rounded-md bg-[#DCE3E3] h-14 lg:h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-[#3F4141] font-bold text-lg lg:text-lg xl:text-[1.2em]">
                      Mensagem:
                    </label>
                    <textarea
                      name="mensagem"
                      placeholder="O que você precisa?"
                      className="w-full p-4 lg:p-3 border border-gray-300 rounded-md bg-[#DCE3E3] min-h-[120px]"
                      rows={5}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-[#06A956] text-white font-bold px-10 py-5 lg:px-8 lg:py-4 text-lg rounded-full hover:bg-[#055D34] transition-colors duration-200 w-full lg:w-auto"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img
            src={imagem}
            alt="Trator da SS&B Construtora"
            className="w-full h-full object-cover object-center"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
