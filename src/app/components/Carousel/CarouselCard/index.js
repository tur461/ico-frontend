
import "./styles.scss"
import Image from "next/image"
export default function CarouselCard(props) {

    return (
        <div className={"carouselCard " + props.className}>
            <Image className="openQuotes" src={props.extra.openQuotes} alt="open quotes" height={10} width={10}/>
            <Image className="closeQuotes" src={props.extra.closeQuotes} alt="close quotes"  height={10} width={10} />
            {props.content}
        </div>
    )
}