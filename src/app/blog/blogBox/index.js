"use client"
import Quote from "../../assets/images/quotes.png";
import Stone from "../../assets/images/stone.jpeg";
import Climate from "../../assets/images/climate.jpeg";
import Fire from "../../assets/images/fire.png";
import Sustainability from "../../assets/images/sustainability.jpg";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import "./styles.scss";
export default function BlogBox({length}) {
    const router=useRouter()
    const data = [
        [Climate, 'A climate for economic revival', 'Category xyz'],
        [Fire, 'Act as if your house is on fire', 'Category xyz'],
        [Sustainability, 'Investing in sustainable climate solutions', 'Category xyz'],
        [Stone, 'Some Title 1', 'Category xyz'],
        [Stone, 'Some Title 2', 'Category xyz']
    ]
    return (
        <>
           
            <div className="row blogBox" >
                {data.slice(0,length).map((item, index) => <div className="col-sm-3 containerBox" key={index}>
                <h5 className="h5_blog_class_2">{item[2]}</h5>
                    <Image src={item[0]} className={"blogImage img-fluid"} alt={"Stone"} priority={true} />
                    <h5 className="twoLineHeight h5_blog_class_2">{item[1]}</h5>
                    <p className="p_blog_class_2">
                        Cryptos can give the climate finance market the boost it desperately needs.So, who would have believed it? The beleaguered, seemingly lane-duck president Joe Biden & his Democrat colleges managed to steer legislation through congress that mandates the largest...
                    </p>
                    <p className="blog_date">28 June 2022</p>
                    <a className="btn btn-linear tabButtonLink blogBtn" onClick={(e)=>{
                        e.preventDefault();
                        router.push(`/blog/${index}`)
                    }}>Read more</a>

                </div>)}
            </div>


        </>
    )
}