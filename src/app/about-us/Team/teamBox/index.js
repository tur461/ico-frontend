import  "./styles.scss";
import NamePlate from "../namePlate";
import Image from "next/image";

const TeamBox = ({name,url,Content,alt}) => {
   // console.log("content",content);
    return (
            <div className="teamBoxContainer">
                <Image src={url} className={"avatar img-fluid"} alt={alt}  priority={true}/>
                <NamePlate name={name}/>
                <Content/>
            </div>
  
        
    );
};

export default TeamBox;