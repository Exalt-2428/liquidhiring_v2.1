import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/images/logo.svg";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";


const Header = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const showSubMenu = () => {
        setShow(!show);
        console.log(show);
    }
    return (
        <React.Fragment>
            <header id={styles.header}>
                <nav className="flex justify-around items-center text-base">
                    <div>
                        <Link href="/">
                            <Image src={Logo} width={106} height={70} alt="logo" />
                        </Link>
                    </div>
                    <div className="m-12">
                        <ul className="flex space-x-7">
                            <li className="cursor-pointer"><Link href="/">Home</Link></li>
                            <li className="cursor-pointer"><Link href="/about">About Us</Link></li>
                            <li className="cursor-pointer">All Jobs</li>
                            <li className="cursor-pointer">Blogs</li>
                            <button onClick={showSubMenu}>
                                <li className="flex">All Categories
                                    {show ?
                                        <Icon icon="il:arrow-up" className="h-3 w-3 m-2" />
                                        :
                                        <Icon icon="il:arrow-down" className="h-3 w-3 m-2" />
                                    }
                                </li>
                                {show ? <ul className="absolute glassBackground rounded-lg p-1 z-10">
                                    <li className="hover:bg-primary p-2 rounded-lg">Web Development</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Mobile Development</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">UI/UX Design</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Graphics Design</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Content Writing</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Marketing</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Accounting</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Customer Support</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Legal</li>
                                    <li className="hover:bg-primary p-2 rounded-lg">Other</li>
                                </ul> : null}</button>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex space-x-7 items-center">
                            <li className="cursor-pointer">Login</li>
                            <li><button className="bg-primary py-3 px-10 rounded-lg">Sign Up</button></li>
                        </ul>
                    </div>

                </nav>
                <hr id={styles.headerLine} className="m-auto" />
            </header>
        </React.Fragment >
    );
}

export default Header;