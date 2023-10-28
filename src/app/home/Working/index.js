import Image from "next/image";
import SignUpIcon from "../../assets/images/work_signup.png";
import FundProjectIcon from "../../assets/images/work_fund_project.png";
import ApplyForFundingIcon from "../../assets/images/work_apply_for_funding.png";
import ProvideExpertiseIcon from "../../assets/images/work_provide_expertise.png";
import "./styles.scss";


export default function Working() {

    return (
        <div className="sectionWorking displayBlock">

            <h2>How it will work</h2>
            <div className="cardGroup">
                <div>
                    <Image src={SignUpIcon.src} alt="SignUp" width={100} height={100}/>
                    <div>
                        <h5>Sign Up</h5>
                        <span>
                            Anyone with internet access can register. However, all users - individuals or organisations - must complete a verification process before they can use the platform.
                        </span>
                    </div>
                </div>
                <div>
                    <Image src={FundProjectIcon.src} alt="FundProject" width={100} height={100}/>
                    <div>
                        <h5>Fund Project</h5>
                        <span>
                            Search proposals by region, category or keyword and choose your preferred funding options - invest, lend or donate. Investors or donors will gain voting rights on proposals they fund.
                        </span>
                    </div>
                </div>
                <div>
                    <Image src={ApplyForFundingIcon.src} alt="ApplyForFunding" width={100} height={100} />
                    <div>
                        <h5>Apply For Funding</h5>
                        <span>
                            Osira gives project leaders direct access to a global community of funders, from which they can seek resourcing on terms set out in their proposals.
                        </span>
                    </div>
                </div>
                <div>
                    <Image src={ProvideExpertiseIcon.src} alt="ProvideExpertise" width={100} height={100}/>
                    <div>
                        <h5>Provide Expertise</h5>
                        <span>
                            Individuals and representatives of institutions with expertise in critical topics such as climate science, ESG finance, environment law, international development or indigenous communities can be appointed to the Osira Protocol Committee. There they can develop and provide guidance on trends, funding priorities, proposal standards and due diligence, as well as give funding proposals a star rating. However, none of this guidance will constitute financial advice and it will always be funder&apos;s responsibility to complete their own due diligence before supporting a funding proposal.
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}