"use client"
import "./styles.scss";
import "./../../components/css/policy.scss";
import Paper from "./../../assets/images/Paper.png"
import litePaper from "./../../assets/images/lightPaper.png"
import Presentations from "./../../assets/images/Presentations.png"
import lock from "./../../assets/images/lock.png"
import PieChart from "./../../assets/images/pie-chart.png"
import Image from "next/image";

const Document = () => {
    return (
        <div className="documentContainer">
            <div className="row">
                <div className="col-sm-3 imageBox">
                <a href='https://drive.google.com/file/d/1796WQH-wYmk8XXiwejKlOuOmc9jsC01m/view?usp=sharing' target='_blank'><Image src={Paper}  alt="Paper" className="documnetIconStyle img-fluid" />
                    
                    <p>Whitepaper</p>
                    </a>
                </div>
                <div className="col-sm-3 imageBox">
                <a href='https://drive.google.com/file/d/1UdCNtTaoVfKbn5s-tPbTS-5J2BGy9Wtj/view?usp=sharing' target='_blank'><Image src={litePaper} alt="litePaper" className="documnetIconStyle img-fluid"/>
                    
                    <p>Litepaper</p>
                    </a>
                </div>
                <div className="col-sm-3 imageBox">
                    <Image src={Presentations}  alt="presentations" className="documnetIconStyle img-fluid"/>
                    <p>Presentation</p>
                </div>
                <div className="col-sm-3 imageBox">
                    <Image src={lock}  alt="lock" className="documnetIconStyle img-fluid"/>
                    <p>Contract audit report</p>
                </div>
                <div className="col-sm-3 imageBox">
                    <Image src={PieChart}  alt="PieChart" className="documnetIconStyle img-fluid"/>
                    <p>Tokenomics</p>
                </div>
            </div>
        </div>

    );
};

export default Document;