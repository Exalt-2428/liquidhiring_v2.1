import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col home_container">
        <section className="flex hero h-32">
          Section
        </section>
        <section className="flex browseJobs h-32">
          Section
        </section>
        <section className="aboutUs h-32">
          Section
        </section>
        <section className="popularCategories h-32">
          Section
        </section>
        <section className="featuredJobs h-32">
          Section
        </section>
        <section className="howItWorks h-32">
          Section
        </section>
        <section className="subscribe h-32">
          Section
        </section>

      </main>

      <Footer />
    </>
  )
}