"use client"
import "./styles.scss";
import "./../../components/css/policy.scss";
import Paper from "./../../assets/images/Paper.png"
import lightPaper from "./../../assets/images/lightPaper.png"
import Presentations from "./../../assets/images/Presentations.png"
import lock from "./../../assets/images/lock.png"
import PieChart from "./../../assets/images/pie-chart.png"
import Image from "next/image";

const Document = () => {
    return (
        <div className="documentContainer">
            <div className="row">
                <div className="col-sm-3 imageBox">
                    <Image src={Paper}  alt="Paper" className="documnetIconStyle img-fluid" />
                    <p>Whitepaper</p>
                </div>
                <div className="col-sm-3 imageBox">
                    <Image src={lightPaper} alt="lightPaper" className="documnetIconStyle img-fluid"/>
                    <p>Lightpaper</p>
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