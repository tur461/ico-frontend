import Image from "next/image";
import ProblemSideImage from "../../assets/images/problem_side.jpg";
import "./styles.scss";


export default function Problem() {

    return (
        <div className="sectionProblemInfo displayBlock">
            <Image className="problemSideImage" src={ProblemSideImage} alt="problem side image"></Image>
            <div>
                <h2>The Problem</h2>
                <h4>The climate finance market is not fit for purpose</h4>
                <div className="textSection">
                    <p>
                        
                    Finance is crucial to addressing the global climate crisis, but getting the money to where it’s needed is beset with problems. These include:
                    </p>
                    <ul>
                    <li>Chronic short-termism risk aversion and uncertainty.</li> 
                    <li>Insufficient focus inadaptation.</li>
                    <li>Fragmented funding sources.</li>
                    <li>Lack of transparency, accountability or innovation.</li>
                    <li>Insufficient funding, bureaucracy other barriers to accessing finance.</li>
                    <li>The ‘debt doom loop’ that traps developing nations.</li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}