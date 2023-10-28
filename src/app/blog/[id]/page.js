"use client"
import Image from "next/image";
import "./../../components/css/policy.scss";
import "./styles.scss";
import Stone from "../../assets/images/stone.jpeg"
import { usePathname,useRouter,useParams } from 'next/navigation';

import Climate from "../../assets/images/climate.jpeg";
import Fire from "../../assets/images/fire.png";
import Sustainability from "../../assets/images/sustainability.jpg";

const BlogView = () => {
    const params=useParams();
    const titleArr = [
        'A climate for economic revival',
        'Act as if your house is on fire',
        'Investing in sustainable climate solutions'
    ]
    const imageArray=[Climate,Fire,Sustainability,Stone,Stone]
    return (
        <div className="blogViewContainer">
            <div className="blogViewBox">
           <div className="contentBox">
                <Image src={imageArray[params.id]} className={"blogViewImage img-fluid"} alt={"Stone"}  priority={true}/>
                <h5 className="twoLineHeight">{titleArr[params.id]}</h5>
                <p>
                    Cryptos can give the climate finance market the boost it desperately needs.So, who would have believed it? The beleaguered, seemingly lane-duck president Joe Biden & his Democrat colleges managed to steer legislation through congress that mandates the largest.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
                </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
                <p>Author name here</p>
                <p>28 June 2022</p>
                </div>
            </div>
        </div>

    );
};

export default BlogView;