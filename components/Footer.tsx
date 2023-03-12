import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";

const Footer = () => {
    return (
        <div>
            <footer className="footer py-1">
                <div className="footer_container">
                    <div className="top flex mt-16 mb-12">
                        <div className="left w-1/4 mx-14">
                            <Image className="mb-2" src={Logo} width={155} height={103} alt="logo" />

                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur. Orci elit sit maecenas convallis quisque et aliquet ullamcorper. Volutpat urna proin nisl accumsan pharetra turpis.
                            </p>
                        </div>
                        <div className="right flex space-x-28 mx-6 ">
                            <div className="company">
                                <h2 className="text-lg">Company</h2>
                                <ul>
                                    <li className="text-sm  my-6">About Us</li>
                                    <li className="text-sm my-6">Contact Us</li>
                                    <li className="text-sm my-6">Blogs</li>
                                </ul>

                            </div>
                            <div className="candidates">
                                <h2 className="text-lg">For Candidates</h2>
                                <ul>
                                    <li className="text-sm my-6">Browse Jobs</li>
                                    <li className="text-sm my-6">Browse Categories</li>
                                    <li className="text-sm my-6">Job Alerts</li>
                                </ul>

                            </div>

                            <div className="employees">
                                <h2 className="text-lg">For Employees</h2>
                                <ul>
                                    <li className="text-sm my-6">Browse Candidates</li>
                                    <li className="text-sm my-6">Post a Job</li>
                                </ul>

                            </div>

                            <div className="resources">
                                <h2 className="text-lg">Resources</h2>
                                <ul>
                                    <li className="text-sm my-6">Site Map</li>
                                    <li className="text-sm my-6">Terms of use</li>
                                    <li className="text-sm my-6">Privacy Policy</li>
                                    <li className="text-sm my-6">Security Center</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <hr className="m-auto footerLine" />
                    <div className="flex justify-between my-8">
                        <div className="left">&copy; {new Date().getFullYear()}, All Right Reserved</div>
                        <div className="right flex ">
                            <Icon className="ml-8" icon="bxl:facebook" color="white" />
                            <Icon className="ml-8" icon="bxl:twitter" color="white" />
                            <Icon className="ml-8" icon="bxl:instagram" color="white" />
                            <Icon className="ml-8" icon="bxl:linkedin" color="white" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;