import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitThree, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="" title=" Şirketin kurulma sebebi">
        Ekici Peynir’in üretimi sonucu açığa çıkan ve içerisinde bulunan asit
        sebebiyle çevreye oldukça zararlı olan peynir altı suyunun tekrardan
        doğaya kazandırılmasıdır.
      </SectionTitle>
      <SectionTitle pretitle="Videoyu seyret" title="Şirketimiz Hakkında">
        Bu ayrılan bölüm şirket hakkında tanıtım videosu içermeyi amaçlar.
      </SectionTitle>
      <Video />

      <SectionTitle title="Ürünler"></SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />

      <SectionTitle pretitle="" title="Müşteri Yorumları">
        Bu ayrılan bölüm müşterilerimizden gelen yorumlara ayrılmıştır.
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Merak edilen sorular">
        Bu ayrılan bölüm şirket hakkında, ürünlerimiz hakkında gibi benzeri
        merak edilen soruları içermektedir.
      </SectionTitle> */}
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}
