import Image from "next/image";
import Quote from "../../assets/images/quotes.png";
import OpenQuotes from "../../assets/images/appos_open.png";
import CloseQuotes from "../../assets/images/appos_close.png";
import PrevBtnIcon from "../../assets/images/left_arrow.png";
import NextBtnIcon from "../../assets/images/right_arrow.png";
import Carousel from "@/app/components/Carousel";
import "./styles.scss";


const carouselCards = [
    <div className="quoted" key="1" >
        <span>
            The global economy and financial system are financing their own destruction. The global
            financial architecture is not fit for purpose.
        </span>

        <h5>Mark Versey</h5>
        <span> CEO, Aviva Investors</span>

    </div>,
    <div className="quoted"  key="2">
        <span>
            The applications of blockchain reach far beyond bitcoin and cryptocurrency. Blockchain is helping us more effectively respond to some of today’s
            biggest environmental and societal challenges.
        </span>

        <h5>Tyler Welmans </h5>
        <span> Blockchain Director, Deloitte Ventures </span>
    </div>,
    <div className="quoted" key="3">
        <span>
            Finance is still largely misaligned with climate change goals. The steps forward so far –including those at COP27 – are provisional and do not yet amount to
            an irreversible shift towards a sustainable financial system.
        </span>
        <h5>Nick Robins</h5>
	<span>Professor in practice for sustainable finance, Granthan Research Institute</span>
    </div>,
]
export default function Quotes() {
    return (
        <div className="sectionQuotes displayBlock">
            <Carousel
                openQuotes={OpenQuotes.src}
                closeQuotes={CloseQuotes.src}
                cards={carouselCards}
                prevIcon={PrevBtnIcon}
                nextIcon={NextBtnIcon}
            ></Carousel>
        </div>
    )
}
