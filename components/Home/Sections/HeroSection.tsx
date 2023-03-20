import Hero from "../../../public/images/hero.svg";
import Cross from "../../../public/images/cross.svg";
import Ellipse from "../../../public/images/ellipse.svg";
import Vector from "../../../public/images/vector.svg";
import Image from "next/image";
import styles from "../Home.module.css";

const HeroSection = () => {
    return (
        <section className="flex h-auto justify-between">
            <div className="w-1/2 my-24">
                <p className="text-tertiary">Best hiring agency to connect with the
                    best talents</p>
                <h1 className="text-5xl my-4">
                    Liquid<span className="text-secondary">Hiring</span>
                </h1>
                <h2 id={styles.slogan} className="text-4xl">
                    Say goodbye to the job, Search grind with <span className="text-secondary">Liquid Hiring on your mind.</span>
                </h2>
                <hr id={styles.hero_line} className="w-1/3 my-4" />
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in
                    porttitor in, accumsan non quam
                </p>
            </div>
            <div>
                <Image id={styles.hero_main} src={Hero} alt="Hero Main" width={524} height={511} />
                <Image id={styles.cross} src={Cross} alt="Cross" width={14} />
                <Image id={styles.ellipse} src={Ellipse} alt="Ellipse" width={15} />
                <Image id={styles.vector} src={Vector} alt="Vector" width={62} />
            </div>
        </section>
    );
}

export default HeroSection;