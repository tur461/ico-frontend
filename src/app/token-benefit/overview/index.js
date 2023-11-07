"use client"
import "./styles.scss"
import "./../../components/css/policy.scss"

const Overview = () => {
    return (
        <div className="overviewContainer">
            <p className="paragraph">The Osira platform is part financials marketplace, part monetary system and part network portal. Its
                mission is to deploy the most sustainable, future-proofed blockchain and AI technology to bridge the gap
                between need and funding at scale, and become the global climate finance platform of choice. Put
                simply, Osira aims to give funders the tools to drive global action on climate change on terms that accord
                with their financial capacity, risk appetite and desired level of commitment, while simultaneously
                supporting vulnerable communities on the climate frontline.</p>
            <ul style={{ marginTop: "20px" }}>
                <li className="paragraph">
                    <h6>• &nbsp;Recipients</h6>
                    <p>have direct access to a global community of funders, from which they can apply for
                        funding for their projects &#160;&#160;&#160;and enterprises in the form of investments, loans and donations, on terms
                        set out in their applications.</p>
                        </li>
                <li className="paragraph">
                    <h6>• &nbsp;Funders</h6>
                    <p>can locate opportunities, directly deal with recipients and make their own decision on which
                        climate-related &#160;&#160;&#160;projects to support.
                    </p>
                </li>
                <li className="paragraph">
                    <h6>• &nbsp;Experts</h6>
                    <p> can help shape the Osira Protocol, the platform standards and star-rating system against
                        which funding &#160;&#160;&#160;applications and priorities can be judged.

                    </p>
                </li>
            </ul>
            <p className="paragraph">
            Through the deployment of Web3, DeFi and Al technology, as well as data oracles, Osira aims to foster a
                secure and transparent online environment that facilitates the participants dialogue and funding decision.

            </p>
        </div>

    );
};

export default Overview;