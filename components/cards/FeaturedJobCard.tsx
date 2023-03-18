import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import CompanyLogo from "../../public/company_logo.svg"



const FeaturedJobCard = () => {
    return (
        <div className="jobcard rounded-lg flex flex-col p-6 m-3">
            <div className="top flex justify-between mb-2">
                <div className="left w-1/5">
                    <Image src={CompanyLogo} alt="Company Logo">
                    </Image></div>

                <div className="right ml-6 flex justify-between w-4/5">
                    <div>
                        <h4 className="text-xl">Darkento Ltd.</h4>
                        <p className="text-xs">New York, USA</p>
                    </div>
                    <div>
                        <Icon className="text-4xl" icon="carbon:bookmark" color="white" />
                    </div>
                </div>
            </div>
            <div className="mid">
                <h3 className="text-2xl">
                    Front-End Developer
                </h3>
                <div className="job_attribute flex py-2 mb-2">
                    <div className="rounded-full bg-tertiary bg-opacity-20 text-xs px-2 py-1 text-tertiary mr-2">
                        <p> Full Time</p>
                    </div>
                    <div className="rounded-full bg-secondary bg-opacity-20 text-xs px-2 py-1 text-secondary mr-2">
                        <p>Remote</p>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla est purus, ultrices in porttitor in, accumsan non
                    quam...
                </p></div>
            <div className="bottom mt-4 items-center flex justify-between">
                <p className="w-1/2 text-xl">
                    $20-$30/hr
                </p>
                <button className="bg-primary py-3 rounded-lg w-32 flex justify-center">
                    Apply Now
                </button>

            </div>

        </div>
    );
}

export default FeaturedJobCard;