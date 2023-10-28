"use client";
import LogoWithLabel from "./../../assets/images/LogoWithLabel.png";
import Image from "next/image";
import SocialMedia from "../SocialMedia";
import LineAboveFooter from "./../../assets/images/lineabovefooter.png"
import PolygonIcon from "./../../assets/images/Polygon-icon.png"
import Link from 'next/link';
import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Image src={LineAboveFooter} alt="LineAbove" className="lineAbove img-fluid"/>
            <div className="content">
                <div className="services">
                    <Image src={LogoWithLabel} alt="LogoWithLabel" style={{ height: 150, width: 150 }} className="img-fluid" />
                    <p style={{marginTop:"22px",wordBreak:"break-all",width: "50%"}}>71-75 Shelton Street London WC2H 9JQ</p>
                    <div style={{display:"flex",marginTop: "30%"}}>
                    <Image src={PolygonIcon} alt="Polygon Icon" className="polygon"/>
                    <h4 style={{marginTop:"2%",marginLeft: "10px"}}>Polygon</h4>
                    </div>
                </div>
                <div>
                    <h4> Quick Links</h4>
                    <div className="grid-container">
                        <div className="grid-child">
                            <p>
                                <Link href="/"> Home</Link>
                            </p>
                            <p>
                                <Link href="/about-us"
                                >About us</Link>
                            </p>
                            <p>
                                <Link href="#">Token</Link>
                            </p>
                            <p>
                                <Link href="/blog">Blogs</Link>
                            </p>
                        </div>

                        <div className="grid-child">

                            <p><Link href="/privacy-policy">Privacy policy</Link></p>
                            <p><Link href="/cookie-policy">Cookie policy</Link></p>
                        </div>
                    </div>

                </div>
                <SocialMedia/>

           
            </div>


        </footer>
    );
};

export default Footer;