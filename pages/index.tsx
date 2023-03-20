import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import HeroDots from "../public/images/hero_dots.svg";
import HeroEllipse from "../public/images/hero_ellipse.svg";
import HeroSection from "@/components/Home/Sections/HeroSection";
import BrowseJobsSection from "@/components/Home/Sections/BrowseJobsSection";
import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import PopularCategoriesSection from "@/components/Home/Sections/PopularCategoriesSection";
import FeaturedJobsSection from "@/components/Home/Sections/FeaturedJobsSection";
import HowItWorksSection from "@/components/Home/Sections/HowItWorksSection";
import NewsletterSection from "@/components/Home/Sections/NewsletterSection";
import styles from "../components/Home/Home.module.css";
import AboutUsDots from "../public/images/about_us_dots.svg";
import AboutUsEllipse from "../public/images/ellipse_2.svg";
import SubscribeEllipse from "../public/images/ellipse_3.svg";
import SubscribeDots from "../public/images/subscribe_dots.svg";

export default function Home() {
  return (
    <>
      <Header />
      <Image className="absolute" src={HeroDots} alt="Hero Dots" width={55} />
      <Image className="absolute" src={HeroEllipse} alt="Hero Ellipse" width={530} />
      <Image id={styles.about_us_dots} src={AboutUsDots} alt="About Us Dots" width={70} />
      <Image id={styles.about_us_ellipse} src={AboutUsEllipse} alt="About Us Ellipse" width={530} />
      <Image id={styles.subscribe_ellipse} src={SubscribeEllipse} alt="Subscribe Ellipse" width={530} />
      <Image id={styles.subscribe_dots} src={SubscribeDots} alt="Subscribe Dots" width={120} />
      <main id={styles.home_container} className="flex flex-col">
        <HeroSection />
        <BrowseJobsSection />
        <AboutUsSection />
        <PopularCategoriesSection />
        <FeaturedJobsSection />
        <HowItWorksSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}