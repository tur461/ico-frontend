"use client"
import "./styles.scss"
import "./../../components/css/policy.scss"

const Benefit = () => {
    return (
        <div className="overviewContainer">
            <h6>Monetisation</h6>
            <p className="paragraph">In addition to giving token holders the ability to play an active role in the climate finance market, simply holding an OSR token has the
                potential to generate financial returns. These can be categorised under four headings:
            </p>
            <ul style={{marginTop:"20px"}}>
                <li className="paragraph">
                    <h6>OSR value appreciation</h6>
                    <p>The sustainable and climate finance markets are projected to see signifcant growth over the coming years and decades. This, combined with the design of Osira’s monetary system,
                        maximises the OSR token’s potential for long-term value appreciation.
                    </p>
                </li>
                <li className="paragraph">
                    <h6>Passive income</h6>
                    <p>The nominal 3% transaction fee on OSR transactions creates a source of passive income for token holders
                        through staking and vesting. This not only contributes to the network’s security and governance, but adds potential benefits in
                        addition to any appreciation in the value of OSR over time.

                    </p>
                </li>
                <li className="paragraph">
                    <h6>Investments</h6>
                    <p>Stakeholders can invest in projects with the aim of making a return on their investment. Investors gain project voting rights
                        in the process, ensuring their financial objectives are aligned with sustainable development, fostering both economic growth
                        and positive environmental impact.
                    </p>
                </li>
                <li className="paragraph">
                    <h6>Loans</h6>
                    <p>Tokenholders can earn interest by providing loans. Though recipients will ultimately set the amount of interest on offer in their
                        funding proposal, market conditions are likely to drive lending terms where the Osira protocol does not recommend concessionary
                        rates. The Osira protocol will incorporate a platform-wide framework on the provision of concessionary lending rates, which are a
                        feature of the climate finance market due to the crippling debt crisis that many vulnerable nations face.
                    </p>
                </li>
                <li className="paragraph">
                    <h6>NFT</h6>
                    <p>In its second stage of development, Osira will aims to provide opportunities for users to generate revenues from cultural assets,
                        which can be marketised as NFTs. Osira aims to offer NFTs as a means of creating value and enabling participation across the Osira
                        ecosystem, especially where the digitisation of cultural assets can provide opportunities for community wealth-building at grassroot
                        level.
                    </p>
                </li>
                <li className="paragraph">
                    <h6>Carbon Credits</h6>
                    <p>Also in a second development stage, tokenholders will be able to bypass market intermediaries and use their OSR to buy and sell carbon offsets in the voluntary carbon market (VCM).
                        The VCM is a project-based system in which the supply of allowances is uncapped, and the Osira platform will act as a means of
                        bypassing intermediaries while increasing the supply of reliable data on each credit’s underlying GHG emissions.
                    </p>
                </li>
            </ul>

        </div>

    );
};

export default Benefit;