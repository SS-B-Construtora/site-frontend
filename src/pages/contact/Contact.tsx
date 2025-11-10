import { Head } from '@/components/Head';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import ContactSection from '@/components/Home/ContactSection';
import FooterSection from '@/components/Home/FooterSection';

function Contact() {
  return (
    <>
      <SocialMediaSidebar />
      <main className="pt-[72px]">
        <Head title="Contato - SS&B Construtora" />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}

export default Contact;
