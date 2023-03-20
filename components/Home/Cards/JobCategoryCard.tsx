import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Bag from "../../../public/images/bag.svg"
import styles from "../Home.module.css"

const JobCategoryCard = () => {
    return (
        <div id={styles.category_card} className="rounded-lg flex py-8 m-3">
            <div className="px-6">
                <Image className="w-24" src={Bag} alt="Business Development"></Image></div>
            <div className="pr-6">
                <h3 className="mb-3 text-lg">
                    Business Development
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adi
                    piscing elit. Nulla est purus, ultrices in
                </p>
                <Link className="mt-4 inline-block text-tertiary flex items-center" href="https://www.google.com/">
                    41 Vacancies
                    <Icon className="ml-1" icon="material-symbols:arrow-right-alt-rounded" color="#008f7a" width={23} />
                </Link>
            </div>
        </div>
    );
}

export default JobCategoryCard;