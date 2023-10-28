import Image from "next/image";
import Quote from "../../assets/images/quotes.jpg";
import "./styles.scss";


export default function Banner() {

    return (
       
        <div className="sectionBanner displayBlock">
            <Image src={Quote} className="quoteImageStyle" alt="quoteImage img-fluid" />

        <div className="quoteHome"><h2>Revolutionsing climate <br />finance with <span>Web3</span> and <span>AI</span> <br />technology</h2> </div>
        </div>
        
    )
}