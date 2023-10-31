import Image from "next/image";
import Quote from "../../assets/images/quotes.png";
import RoadMapLine from "../../assets/images/roadMapLine.png";
import Business from "../../assets/images/business_dev.png";
import ICO from "../../assets/images/ICO.png";
import IDO from "../../assets/images/IDO.png";
import Osira from "../../assets/images/osira.png";
import "./styles.scss";


export default function Roadmap() {

    return (
        <div className="roadMapContainer displayBlock">
            <h4 style={{ textAlign: "center" }}>
                Roadmap
            </h4>
            <h6 style={{ textAlign: "center" }}>
                Combining Web3, Defi and  AI to transform climate finance
            </h6>
            <div className="row imageBox">
                <div className="roadMapImgSec">
                    {/* <Image src={RoadMapLine} alt="RoadMapLine" className="roadMapImg"/> */}
                    <ul className="first">
                    <li>Audit whitepaper + tokenomics model</li>
                    <li>ICO smart contract audit</li>
                    <li>Corporate development</li>
                    <li>Build team and board</li>
                    <li>Appoint strategic partnerships</li>
                    <li>Set user adoption targets</li>
                    <li>Marketing + communications planning</li>

                    </ul>
                    <Image src={ICO} className="ico roadIcon"  alt="ico"/>
                    <ul className="second">
                        <li>Listing on IDO platforms</li>
                        <li>Listing on exchanges</li>

                    </ul>
                    <Image src={Osira} className="osira roadIcon"  alt="osira"/>
                    
                    <Image src={Business} className="business roadIcon"alt="business" />
                    <ul className="third">
                        <li>Airdrops</li>
                        <li>Token pre-sale</li>
                        <li>Retail sale</li>

                    </ul>
                   
                    <Image src={IDO} className="ido roadIcon" alt="ido"/>
                    <ul className="fourth">
                        <li>Web app launch</li>
                        <li>Mobile app launch</li>
                        <li>Governance appointments</li>
                        <li>Implement liquidity pool functionality</li>
                        <li>NFT functionality launch</li>
                        <li>Carbon credits launch</li>

                    </ul>
                    {/* <ul className="first">
                        <li>First</li>
                    </ul>
                    <ul className="second">
                        <li>Second</li>
                    </ul>
                
                    */}
                </div>
            </div>
        </div>
    )
}