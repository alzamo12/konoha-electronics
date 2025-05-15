import React from 'react';
import { Link } from 'react-router';
// import logo from "../assets/new-logo.png"
import facebook from "../../assets/icon/facebook.png"
import instagram from "../../assets/icon/instagram.png"
import linkedin from "../../assets/icon/linkedin.png"

const Footer = () => {
    return (
        <div className="self-end mt-10 md:mt-20 lg:mt-28 2xl:mt-32">
            <footer className="footer footer-horizontal footer-center bg-[#0d4827] footer-center mt-12 text-white md:rounded py-6 md:py-20 gap-6 md:px-10 lg:px-20 ">
                <div>
                    <div className="flex md:justify-center md:gap-3 items-center md:text-xl lg:text-3xl ">
                        {/* <img className="w-10" src={logo} alt="" /> */}
                        <a className="btn btn-ghost text-xl md:text-3xl cinzel text-[#c3921e]">Mari<span className="">Gold</span>  </a>
                    </div>
                    <ul className="menu menu-horizontal text-[#FFFFFF70] px-1 gap-3 md:gap-6 ">
                        <Link to="/">Home</Link>
                        <Link to="/my-bookings">My-bookings</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/contactUs">Contact Us</Link>
                    </ul>
                </div>
                <aside className=" border-t-[1px] border-[#FFFFFF20]  border-dashed w-full">
                    <div className="flex gap-5 md:gap-8 text-sm md:text-xl mt-4 md:mt-5">
                        <a target="_blank" href="https://www.facebook.com/al.zami.583"><img src={facebook} alt="" /></a>
                        <a target="_blank" href="https://www.instagram.com/alzami01"><img src={instagram} alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/al-zami-820486349"><img src={linkedin} width={25} alt="" /></a>
                    </div>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;