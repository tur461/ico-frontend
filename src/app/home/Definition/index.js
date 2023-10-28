import Image from "next/image";
import RectangleBG from "../../assets/images/rect_behind_climate.png";
import OsiraClimateFinanceImage from "../../assets/images/osira_climate_finance.png";
import "./styles.scss";


export default function Definition() {

    return (
        <div className="sectionDefinition">
                <p className="osiraClimateFinanceRect">
                    <Image className="rectangleBG" src={RectangleBG} alt="Rectangle BG"></Image>
                    <Image className="osiraClimateFinanceImage" src={OsiraClimateFinanceImage} alt="Osira Climate Finance Image"></Image>
                </p>
                <div className="textOsiraDefinition">
                    <p>What is <span>Osira ?</span></p>
                    <p>
                    The Osira platform is part financial marketplace, part monetary system and part network portal. Its mission is to deploy the most sustainable, future-proofed AI and blockchain technology to bridge the gap between need and funding at scale, and become the global climate finance platform of choice. Put simply Osira aims to give funders the tools to drive global action on climate change on terms that accord with their financial capacity, risk appetite and desired level of commitment, while simultaneously supporting vulnerable communities on the climate frontline.
                    </p>
                </div>
        </div>
    )
}