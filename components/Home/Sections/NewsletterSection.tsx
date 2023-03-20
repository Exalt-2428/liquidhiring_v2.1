import styles from "../Home.module.css";

const NewsletterSection = () => {
    return (
        <section className="h-auto flex justify-center my-16 mb-28">
            <div id={styles.subscribe} className="w-5/6 rounded-lg flex flex-col items-center p-8">
                <h3 className="text-4xl">
                    Subscribe To Our Newsletter
                </h3>
                <p className="text-base my-6 text-center w-8/12">
                    Be the first one to hear our latest announcements, directly on your email. Subscribe today and
                    we will keep ypu update!
                </p>
                <div className="flex w-96">
                    <input id={styles.subscribe_email} className="w-3/4 rounded-l-lg" type="text" placeholder="Enter your email" />
                    <button className="bg-primary px-16 py-3 w-1/4 flex justify-center rounded-r-lg">Subscribe</button>
                </div>
            </div>
        </section>
    );
}

export default NewsletterSection;