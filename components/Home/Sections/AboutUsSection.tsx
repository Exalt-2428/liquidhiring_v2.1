import AboutUs from "../../../public/images/about_us.svg";
import Image from "next/image";
import styles from "../Home.module.css";

const AboutUsSection = () => {
    return (
        <>
            <section className="h-auto flex justify-between mt-16">
                <div id={styles.about_us_left} className="flex flex-col justify-center">
                    <p className="text-tertiary">About Us</p>
                    <h2 className="text-4xl slogan my-3">
                        Find The Job That <span className="text-secondary">Fits Your Life.</span>
                    </h2>
                    <p className="text-lg ">
                        Search all the open positions on the web. Get your own personalized salary estimate.
                        Read reviews on over 30000+ companies worldwide.
                    </p>
                    <ul id={styles.about_us_points} className="my-4 text-lg mb-8">
                        <li className="m-3">&ensp;Digital Marketing Solutions for Tomorrow</li>
                        <li className="m-3">&ensp;Our Talented & Experienced Marketing Agency</li>
                        <li className="m-3">&ensp;Create your own skin to match your brand</li>
                    </ul>
                    <button className="bg-primary py-3 rounded-lg w-44 flex justify-center">Register Now</button>
                </div>
                <div>
                    <Image src={AboutUs} alt="About Us"></Image>
                </div>
            </section>
        </>
    );
}

export default AboutUsSection;