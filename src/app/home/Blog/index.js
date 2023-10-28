import Image from "next/image";
import Quote from "../../assets/images/quotes.png";
import "./styles.scss";
import BlogBox from "./../../blog/blogBox"


export default function Blog() {

    return (
        <div className="displayBlock">
            <div>
            <h5 style={{textAlign:'center'}}>Osira Blog </h5>
            <p style={{textAlign:'center'}}>News and Persective from global climate finance</p>
            </div>
            <div className="blogContainer">
                <BlogBox length={3}/>
                </div>
               
        </div>
    )
}