import Image from "next/image";
import Vector2 from "../../../public/images/vector_2.svg";
import Send from "../../../public/images/send.svg";
import Account from "../../../public/images/account.svg";
import { Icon } from '@iconify/react';
import styles from "../Home.module.css";

const HowItWorksSection = () => {
    return (
        <section className="h-auto flex flex-col items-center mt-20">
            <p className="text-tertiary">Process</p>
            <h2 className={`text-5xl ${styles.section_title}`}>
                How It <span className="text-secondary">Works</span>
            </h2>
            <div id={styles.how_it_works} className="flex w-full z-10 absolute">
                <div id={styles.how_it_works_steps} className="w-1/3 flex flex-col items-center">
                    <p className={styles.number}>01</p>
                    <Image className={styles.vector_2} src={Vector2} alt="Vector2" />
                    <div className={`${styles.circle} rounded-full inline-block w-36 h-36 bg-secondary flex items-center justify-center`}>
                        <Image src={Account} alt="Account" />
                    </div>
                    <div className={`${styles.two_para} w-9/12 flex flex-col items-center`}>
                        <h3 className="text-3xl mb-4">
                            Create Account
                        </h3>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla est purus, ultrices</p>
                    </div>
                </div>
                <div id={styles.how_it_works_steps} className="w-1/3 flex flex-col items-center">
                    <p className={styles.number}>02</p>
                    <Image className={styles.vector_2} src={Vector2} alt="Vector2" />
                    <div className={`${styles.circle} rounded-full inline-block w-36 h-36 bg-secondary flex items-center justify-center`}>
                        <Icon className="text-7xl " icon="ic:outline-screen-search-desktop" color="white" />
                    </div>
                    <div className={`${styles.two_para} w-9/12 flex flex-col items-center`}>
                        <h3 className="text-3xl mb-4">
                            Find Job
                        </h3>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla est purus, ultrices</p>
                    </div>
                </div>
                <div id={styles.how_it_works_steps} className="w-1/3 flex flex-col items-center">
                    <p id={styles.number_3} className={styles.number}>03</p>
                    <div id={styles.last_circle} className={`${styles.circle} rounded-full inline-block w-36 h-36 bg-secondary flex items-center justify-center`}>

                        <Image src={Send} alt="Send" />
                    </div>
                    <div className={`${styles.third_para} mt-32 w-9/12 flex flex-col items-center`}>
                        <h3 className="text-3xl mb-4">
                            Upload Resume
                        </h3>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla est purus, ultrices</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorksSection;