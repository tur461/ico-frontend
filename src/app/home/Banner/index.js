import Image from "next/image";
import Quote from "../../assets/images/quotes.jpg";
import "./styles.scss";
// import BannerVideo from "../../assets/images/Osira_video.mp4";

export default function Banner() {
    
    return (
       
        <div className="sectionBanner displayBlock">
            
       {/* <video className="bannerVideo" src="https://youtu.be/XPHXsGL9usM?si=ZY4P3grhPXov60AI" type="video/mp4" autoplay loop muted playsInline/> */}
       
        <iframe width = "100%" height = "810" src="https://www.youtube.com/embed/XPHXsGL9usM?playlist=XPHXsGL9usM&loop=1&controls=0&amp;showinfo=0&amp;modestbranding=1&autohide=1" frameborder="0" allowfullscreen></iframe>

        <div className="quoteHome"><h2>Revolutionsing climate <br />finance with <span>Web3</span> and <span>AI</span> <br />technology</h2> </div>
        </div>
        
    )
}