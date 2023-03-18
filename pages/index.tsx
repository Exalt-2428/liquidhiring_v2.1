import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Hero from "../public/hero.svg";
import Cross from "../public/cross.svg";
import Ellipse from "../public/ellipse.svg";
import Vector from "../public/vector.svg";
import HeroDots from "../public/hero_dots.svg";
import HeroEllipse from "../public/hero_ellipse.svg";
import Browse from "../public/browse.svg";
import { Icon } from '@iconify/react';
import AboutUs from "../public/about_us.svg";
import JobCategoryCard from "@/components/cards/JobCategoryCard";
import FeaturedJobCard from "@/components/cards/FeaturedJobCard";
import Vector2 from "../public/vector_2.svg";
import Send from "../public/send.svg";
import Account from "../public/account.svg";

export default function Home() {
  return (
    <>
      <Header />
      <Image className="hero_dots absolute" src={HeroDots} alt="Hero Dots" width={55} />
      <Image className="hero_elipse absolute" src={HeroEllipse} alt="Hero Ellipse" width={530} />
      <main className="flex flex-col home_container">
        <section className="flex hero h-auto justify-between">
          <div className="left w-1/2 my-24">
            <p className="text-tertiary">Best hiring agency to connect with the
              best talents</p>
            <h1 className="text-5xl my-4">
              Liquid<span className="text-secondary">Hiring</span>
            </h1>
            <h2 className="text-4xl slogan">
              Say goodbye to the job, Search grind with <span className="text-secondary">Liquid Hiring on your mind.</span>
            </h2>
            <hr className="w-1/3 heroLine my-4" />
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in
              porttitor in, accumsan non quam
            </p>
          </div>
          <div className="right">
            <Image className="hero_main" src={Hero} alt="Hero" width={524} height={511} />
            <Image className="cross" src={Cross} alt="Hero" width={14} />
            <Image className="ellipse" src={Ellipse} alt="Hero" width={15} />
            <Image className="vector" src={Vector} alt="Hero" width={62} />
          </div>
        </section>
        <section className="flex browseJobs h-auto justify-between">
          <div className="left">
            <Image src={Browse} alt="Browse" width={550} />
          </div>
          <div className="right text-right w-auto flex flex-col justify-center">
            <p className="text-tertiary">Make your domain perfect</p>
            <h1 className="text-5xl my-4 text-secondary">
              3,000+<span className="text-white"> Browse Jobs</span>
            </h1>
            <p className="text-lg">
              The best online platform for learning all things and fine jobs
              that's suitable for you.
            </p>
            <div className="browse flex transparentCard p-2 rounded-lg text-lg mt-8">
              <div className="keyword w-52 py-3 ml-4 flex">
                <label htmlFor="keyword">
                  <Icon className="text-3xl" icon="ic:baseline-search" color="#9b9b9b" />
                </label>
                <input size={16} id="keyword" className="keyword ml-2 bg-transparent" type="text" placeholder="Job title or keyword" />
              </div>
              <span className="divider"></span>
              <div className="location w-52 py-3 ml-4 flex">
                <label htmlFor="location">
                  <Icon className="text-3xl" icon="material-symbols:location-on-outline" color="#9b9b9b" />
                </label>
                <input size={16} id="location" className="location ml-2 bg-transparent" type="text" placeholder="City or postcode" />
              </div>
              <span className="divider"></span>
              <div className="categories w-44 py-3 ml-4 flex">
                <label htmlFor="categories">
                  <Icon className="text-3xl" icon="tabler:category" color="#9b9b9b" />
                </label>
                <select id="categories" className="categories ml-2 bg-transparent category_search" name="categories">
                  <option value="categories" >Categories</option>
                </select>
              </div>
              <div className="search bg-primary py-3 rounded-lg w-32 flex justify-center">
                <button>Find Job</button>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutUs h-auto flex justify-between mt-16">
          <div className="left">
            <p className="text-tertiary">About Us</p>
            <h2 className="text-4xl slogan">
              Find The Job That <span className="text-secondary">Fits Your Life.</span>
            </h2>
            <p className="text-lg">
              Search all the open positions on the web. Get your own personalized salary estimate.
              Read reviews on over 30000+ companies worldwide.
            </p>
            <ul className="aboutUs_points">
              <li>Digital Marketing Solutions for Tomorrow</li>
              <li>Our Talented & Experienced Marketing Agency</li>
              <li>Create your own skin to match your brand</li>
            </ul>
            <button className="bg-primary py-3 rounded-lg w-44 flex justify-center">Register Now</button>
          </div>
          <div className="right">
            <Image src={AboutUs} alt="About Us"></Image>
          </div>
        </section>
        <section className="popularCategories h-auto flex flex-col items-center mt-20">
          <p className="text-tertiary">Build Career</p>
          <h2 className="text-5xl slogan">
            Popular <span className="text-secondary">Categories</span>
          </h2>
          <div className="grid grid-cols-3 my-10">
            <JobCategoryCard />
            <JobCategoryCard />
            <JobCategoryCard />
            <JobCategoryCard />
            <JobCategoryCard />
            <JobCategoryCard />
          </div>
        </section>
        <section className="featuredJobs h-auto flex flex-col items-center mt-12">
          <p className="text-tertiary">Build Career</p>
          <h2 className="text-5xl slogan">
            Featured <span className="text-secondary">Jobs</span>
          </h2>
          <div className="jobcards grid grid-cols-3">
            <FeaturedJobCard />
            <FeaturedJobCard />
            <FeaturedJobCard />
            <FeaturedJobCard />
            <FeaturedJobCard />
            <FeaturedJobCard />
          </div>
        </section>
        <section className=" h-auto flex flex-col items-center mt-20">
          <p className="text-tertiary">Process</p>
          <h2 className="text-5xl slogan">
            How It <span className="text-secondary">Works</span>
          </h2>
          <div className="howItWorks flex w-full z-10 absolute">


            <div className="w-1/3 flex flex-col items-center">
              <p className="number">01</p>
              <Image className="vector_2" src={Vector2} alt="Vector2" />

              <div className="circle rounded-full inline-block w-36 h-36 bg-secondary flex items-center justify-center">
                <Image src={Account} alt="Account" />

              </div>
              <div className="two-para w-9/12 flex flex-col items-center">
                <h3 className="text-3xl mb-4">
                  Create Account
                </h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla est purus, ultrices</p>
              </div>
            </div>

            <div className="w-1/3 flex flex-col items-center">
              <p className="number">02</p>
              <Image className="vector_2" src={Vector2} alt="Vector2" />
              <div className="circle rounded-full inline-block w-36 h-36 bg-secondary flex items-center justify-center">
                <Icon className="text-7xl " icon="ic:outline-screen-search-desktop" color="white" />
              </div>
              <div className="two-para w-9/12 flex flex-col items-center">
                <h3 className="text-3xl mb-4">
                  Find Job
                </h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla est purus, ultrices</p>
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <p className="number_3 number">03</p>
              <div className="last_circle circle rounded-full inline-block w-36 h-36 bg-secondary flex items-center justify-center">

                <Image src={Send} alt="Send" />
              </div>
              <div className="mt-32 w-9/12 flex flex-col items-center">
                <h3 className="text-3xl mb-4">
                  Upload Resume
                </h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla est purus, ultrices</p>
              </div>
            </div>
          </div>
        </section>
        <section className="h-auto flex justify-center my-16 mb-28">
          <div className="subscribe w-5/6 rounded-lg flex flex-col items-center p-8">
            <h3 className="text-4xl">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-base my-6 text-center w-8/12">
              Be the first one to hear our latest announcements, directly on your email. Subscribe today and
              we will keep ypu update!
            </p>
            <div className="flex w-96">
              <input className="subscribe_email w-3/4 rounded-l-lg" type="text" placeholder="Enter your email" />
              <button className="bg-primary px-16 py-3 w-1/4 flex justify-center rounded-r-lg">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}