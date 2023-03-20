import FeaturedJobCard from "../Cards/FeaturedJobCard";
import styles from "../Home.module.css";

const FeaturedJobsSection = () => {
    return (
        <section className="h-auto flex flex-col items-center mt-12">
            <p className="text-tertiary">Build Career</p>
            <h2 className={`${styles.section_title} text-5xl`}>
                Featured <span className="text-secondary">Jobs</span>
            </h2>
            <div className="grid grid-cols-3 my-10">
                <FeaturedJobCard />
                <FeaturedJobCard />
                <FeaturedJobCard />
                <FeaturedJobCard />
                <FeaturedJobCard />
                <FeaturedJobCard />
            </div>
        </section>
    );
}

export default FeaturedJobsSection;