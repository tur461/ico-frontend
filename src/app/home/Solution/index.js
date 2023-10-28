import Image from "next/image";
import CoinWithoutBg from "../../assets/images/solution_bg.png";
import "./styles.scss";


export default function Solution() {

    return (
        <div className="sectionSolution displayBlock">
            {/* <Image className="coinOverlay" src={CoinWithoutBg} alt="Coin without bg"></Image> */}
            <div className="overlaySolutionText">
                <h4>The Solution</h4>
                <p>
                Osira harnesses the revolutionary power of Web3 and AI technology to overcome the climate finance market’s shortcomings. Osira’s online governance platform brings funders, recipients and experts together under one roof to facilitate the symbiotic exchange of expertise, data and finance. With its own utility token, Osira will use AI, blockchain and decentralised finance (DeFi) smart contracts to connect and empower people to fund transformation change.
                </p>

            </div>
        </div>
    )
}