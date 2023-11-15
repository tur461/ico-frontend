import LinkedIn from "./../../assets/images/linkedin.png";
import Instagram from "./../../assets/images/instagram.png";
import Twitter from "./../../assets/images/twitter.png";
import Discord from "./../../assets/images/Discord.png";
import Twitch from "./../../assets/images/Twitch.png";
import Tiktok from "./../../assets/images/Tiktok.png";
import Facebook from "./../../assets/images/Facebook.png";
import Youtube from "./../../assets/images/Youtube.png";
import Image from "next/image";
import "./styles.scss"
const SocialMedia=()=>{
    return(
        <div className="details">
        <h6 className="address">Join our community</h6>
        <div>
        <Image src={LinkedIn} alt="LinkedIn" className="socialIcon img-fluid" />
        <Image src={Facebook} alt="Facebook" className="socialIcon3 img-fluid" />
        <Image src={Instagram} alt="Instagram" className="socialIcon img-fluid" />
        <Image src={Twitter} alt="Twiiter" className="socialIcon img-fluid" />

        </div>
        <div >
        {/* <Image src={Facebook} alt="Facebook" className="socialIcon2 img-fluid" /> */}
        <Image src={Youtube} alt="Youtube" className="socialIcon2 img-fluid" />
        <Image src={Tiktok} alt="Tiktok" className="socialIcon2 img-fluid" />
        <Image src={Twitch} alt="Twitch" className="socialIcon2 img-fluid" />

        </div>


    </div>

    )
    
}
export default SocialMedia