"use client";
import LogoWithLabel from "./../../assets/images/LogoWithLabel.png";
import Image from "next/image";
import "./styles.scss";

const Introduction=()=>{
    return(
        <div className="row introductionContainer" style={{margin:10}}>
        <div className="col">
            <h4>What is <label className="content">Osira ?</label></h4>

            <p>Part financial marketplace, part monetary system and part network portal, Osira aims to create a community that supports climate 
                enterprises, research projects and technologies, enabling funders to put their money to good use in line with their risk appetite and desired level of return. With it’s own utility token and built on blockchain technology and decentrailsed finance (Defi) smart contracts, Osira aims to facilitate the symbolic exchange of expertise, data and finance.
            </p>
            <p> Users can search and fund proposals, apply for funding themselves, or provide expertise to help shape the Osira Protocol, the platform’s project-rating framework. Osira tokenholders can also stand for election to one of platform’s governance committees, whose role it is to maintain high standards and optimal functioning.</p>
            <p>By making the platform secure, transparent and democratic, Osira seeks to grow the numbers engaged with the climate finance market and derive transformative change in the process.</p>
        </div>
        <div className="col">
            <div className="colImageBox">
              <Image src={LogoWithLabel} alt="Logo With Label" className="imageStyle img-fluid"   priority={true}/>
            </div>
        </div>
    </div>
    )

}
export default Introduction