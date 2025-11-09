import { Head } from '@/components/Head';
import ContactSection from '@/components/Home/ContactSection';
import FooterSection from '@/components/Home/FooterSection';

function Contact() {
  return (
    <div>
      <main className="pt-[72px]">
        <Head title="Contato - SS&B Construtora" />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default Contact;
