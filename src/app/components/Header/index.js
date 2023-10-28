"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Button';
import { usePathname } from 'next/navigation';
import Logo from "../../assets/images/companyLogo.png";
import CustomModal from "./../Modal";
import Image from 'next/image';
import LinkedIn from "./../../assets/images/linkedin.png";
import Instagram from "./../../assets/images/instagram.png";
import Twitter from "./../../assets/images/twitter.png";
import Line from "../../assets/images/Line7.png"
import Discord from "./../../assets/images/Discord.png";
import Twitch from "./../../assets/images/Twitch.png";
import Tiktok from "./../../assets/images/Tiktok.png";
import Facebook from "./../../assets/images/Facebook.png";
import Youtube from "./../../assets/images/Youtube.png";
import SocialMedia from '../SocialMedia';
import "./styles.scss";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className="header">
                <div >
                    <Image src={Logo} width={70} height={84} alt="logo" priority={true} className='img-fluid' />
                    {/* <Link href={"/"} className="logo">CompanyLogo</Link> */}
                    <div className="header-right">
                        <Link className={pathname == "/" ? "active" : ""} href="/">Home</Link>
                        <Link className={pathname == "/about-us" ? "active" : ""} href="/about-us">About us</Link>
                        <Link className={pathname == "/token-benefit" ? "active" : ""} href="/token-benefit">Token benefit</Link>
                        <Link className={pathname == "/white-paper" ? "active" : ""} href="/white-paper">Whitepaper</Link>
                        <Link className={pathname == "/blog" ? "active" : ""} href='/blog'>Blog</Link>
                        {/* <Button title={"Connect wallet"}/> */}
                        <Button title={"Join community"} onClick={(e) => {
                            e.preventDefault();
                            //alert("hello")
                            setShowModal(true)
                        }} />
                    </div>
                </div>

            </header>
            <CustomModal isOpen={showModal} onClose={() => { setShowModal(false) }}>
                <SocialMedia/>
            </CustomModal>
        
        </>

    );
};

export default Header;