import JobCategoryCard from "../Cards/JobCategoryCard";
import styles from "../../../styles/Home.module.css";

const PopularCategories = () => {
    return (
        <section className="h-auto flex flex-col items-center mt-20">
            <p className="text-tertiary">Build Career</p>
            <h2 className={`text-5xl ${styles.section_title}`}>
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
    );
}

export default PopularCategories;