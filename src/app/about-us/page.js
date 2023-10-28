"use client"
import Team from "./Team";
import TechnologyPartner from "./TechnologyPartner";
import LogoWithLabel from "./../assets/images/LogoWithLabel.png";
import Image from "next/image";
import "./styles.scss";
import Introduction from "./Introduction";

const AboutUs = () => {
    return (
        <div className="aboutusContainer">
           <Introduction/>
            <Team />
            <TechnologyPartner />
        </div>

    );
};

export default AboutUs;