"use client";
import ThreeDeeWeb from "./../../assets/images/threedeeweb.png";
import Image from "next/image";
import "./styles.scss";

const TechnologyPartner = () => {
    // console.log("content",content);
    return (
        <div className="boxGrid">
        <div className="row technologyContainer ">
            {/* <div className="col boxGrid">
                <div className="row"> */}
                    <div className="col"> <Image src={ThreeDeeWeb} alt="threedeeweb" className="threedeelogo img-fluid"/> </div>
                    <div className="col textPadd">
                        <h3 className="technologyHeading"><label className="content">Osira’s</label> Technology Partners</h3>
                        <p>
                            Osira is now ready to proceed with the platform’s implementation, having completed an
                            extensive discovery and business analysis process with our blockchain development partner
                            <a className="a-tag" href="https://threedeeweb.com/">ThreeDeeWeb</a>.
                        </p>
                    </div>
                </div>

         </div>

        // </div>


    );
};

export default TechnologyPartner;