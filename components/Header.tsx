import Image from "next/image";
import React from "react";
import Logo from "../public/logo.svg";

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="flex justify-around items-center text-base">
                    <div className="left">
                        <Image src={Logo} width={106} height={70} alt="logo" />
                    </div>
                    <div className="middle">
                        <ul className="flex space-x-7">
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="flex space-x-7">
                            <li>Login</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>

                </nav>
                <hr className="m-auto border-0.5 border-gray-20 w-10/12" />
            </header>
        </React.Fragment>
    );
}

export default Header;