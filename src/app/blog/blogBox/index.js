"use client"
import Quote from "../../assets/images/quotes.png";
// import Stone from "../../assets/images/stone.jpeg";
import Climate from "../../assets/images/climate.jpeg";
import Fire from "../../assets/images/fire.png";
import Sustainability from "../../assets/images/sustainability.jpg";
import Image from "next/image";
import { useRouter} from 'next/navigation';
import "./styles.scss";

export default function BlogBox({length}) {
    const router=useRouter()

    const data = [
        [Climate, 'A climate for economic renewal', 'Category xyz',"So, who would’ve believed it? The beleaguered, seemingly lame-duck president Joe Biden and his Democrat colleagues managed to steer legislation through Congress that mandates the largest climate investment programme in US history. Cue a collective sigh of relief, and celebrations from the Democrats and climate-aware. ‘Imperfect’ as even its supporters describe it, the Inflation ",'5 October 2022'],
        [Fire, 'Act as if your house is on fire. Because it is!', 'Category xyz',"Not a day goes by without us being bombarded with reports of extreme weather events. The world is beset with hurricanes, floods, drought and heatwaves. We are confronted by images of melting glaciers, loss of habitats and global health emergencies. Yet solutions seem thin on the ground. This summer’s extreme weather event hit the global North, including my own city, London. Images of homes",'8 September 2022'],
        [Sustainability, 'Investing in sustainable climate solutions', 'Category xyz',"David Kaimowitz is senior forestry officer of the UN Food & Agriculture Organisation. Like many in the sustainability field, he says we must invest in indigenous peoples if the UN’s sustainable development goals are to be achieved. Indigenous peoples play a critical role in stewarding the environment and combatting climate change and its impacts. It’s a role that the scientific community",'4 October 2022']
    ]

    

   
    return (
        <>
           
            <div className="row blogBox" >
                {data.slice(0,length).map((item, index) => <div className="col-sm-3 containerBox" key={index}>
                <h5 className="h5_blog_class_2 h5-cat_2">{item[2]}</h5>
                    <Image src={item[0]} className={"blogImage img-fluid"} alt={"Stone"} priority={true} />
                    <h5 className="twoLineHeight h5_blog_class_2 p-cat_2">{item[1]}</h5>
                    <p className="p_blog_class_2">
                    {item[3]}
                    </p>
                    <p className="blog_date">{item[4]}</p>
                    <a className="btn btn-linear tabButtonLink btn--read-more" onClick={(e)=>{
                        e.preventDefault();
                        router.push(`/blog/${index}`)
                    }}>Read more</a>

                </div>)}
            </div>


        </>
    )
}