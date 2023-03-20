import Browse from "../../../public/images/browse.svg";
import Image from "next/image";
import { Icon } from '@iconify/react';
import styles from "../../Home/Home.module.css";

const BrowseJobsSection = () => {
    return (
        <section className="flex h-auto justify-between">
            <div>
                <Image src={Browse} alt="Browse" width={550} />
            </div>
            <div className="text-right w-auto flex flex-col justify-center">
                <p className="text-tertiary">Make your domain perfect</p>
                <h1 className="text-5xl my-4 text-secondary">
                    3,000+<span className="text-white"> Browse Jobs</span>
                </h1>
                <p className="text-lg">
                    The best online platform for learning all things and fine jobs
                    that's suitable for you.
                </p>
                <div id={styles.browse} className="flex glassBackground p-2 rounded-lg text-lg mt-8">
                    <div className="w-52 py-3 ml-4 flex">
                        <label htmlFor="keyword">
                            <Icon className="text-3xl" icon="ic:baseline-search" color="#9b9b9b" />
                        </label>
                        <input size={16} id="keyword" className={`${styles.keyword} ml-2 bg-transparent`} type="text" placeholder="Job title or keyword" />
                    </div>
                    <span className={styles.divider}></span>
                    <div className="w-52 py-3 ml-4 flex">
                        <label htmlFor="location">
                            <Icon className="text-3xl" icon="material-symbols:location-on-outline" color="#9b9b9b" />
                        </label>
                        <input size={16} id="location" className={`${styles.location} ml-2 bg-transparent`} type="text" placeholder="City or postcode" />
                    </div>
                    <span className={styles.divider}></span>
                    <div className="w-44 py-3 ml-4 flex">
                        <label htmlFor="categories">
                            <Icon className="text-3xl" icon="tabler:category" color="#9b9b9b" />
                        </label>
                        <select id="categories" className={`${styles.categories} ml-2 bg-transparent ${styles.category_search}`} name="categories">
                            <option value="categories" >Categories</option>
                        </select>
                    </div>
                    <div className="bg-primary py-3 rounded-lg w-32 flex justify-center">
                        <button>Find Job</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrowseJobsSection;