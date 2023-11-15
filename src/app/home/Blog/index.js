import Image from "next/image";
import Quote from "../../assets/images/quotes.png";
import "./styles.scss";
import BlogBox from "./../../blog/blogBox"


export default function Blog() {

    return (
        <div className="blogSection displayBlock">
            <div>
            <h5 className="section-heading">Osira Blog </h5>
            <p style={{textAlign:'center'}}>News and perspectives from the global climate finance market.</p>
            </div>
            <div className="blogContainer">
                <BlogBox length={3}/>
                </div>
               
        </div>
    )
}