import Image from "next/image";
import Quote from "../../assets/images/quotes.png";
import OpenQuotes from "../../assets/images/appos_open.png";
import CloseQuotes from "../../assets/images/appos_close.png";
import PrevBtnIcon from "../../assets/images/left_arrow.png";
import NextBtnIcon from "../../assets/images/right_arrow.png";
import Carousel from "@/app/components/Carousel";
import "./styles.scss";


const carouselCards = [
    <div className="quoted" key="0" >
        <span>
            The global economy and financial system are financing their own destruction. The global
            financial architecture is not fit for purpose.
        </span>

        <h3>Mark Versey</h3>
        <span> CEO, Aviva Investors</span>

    </div>,
    <div className="quoted"  key="1">
        <span>
            The applications of blockchain reach far beyond bitcoin and cryptocurrency. Blockchain is helping us more effectively respond to some of today’s
            biggest environmental and societal challenges.
        </span>

        <h3>Tyler Welmans</h3>
        <span>Blockchain Director, Deloitte Ventures</span>
        {/* <span>  Raam Chandrasekharan – WEF Crypto Sustainability Coalition member    </span> */}
    </div>,
    <div className="quoted" key="2">
        <span>
            Finance is still largely misaligned with climate change goals. The steps forward so far – including those at COP27 – are provisional and do not yet amount to
            an irreversible shift towards a sustainable financial system.
        </span>
        <h3>Nick Robins</h3>
        <span>Professor in practice for sustainable finance, Granthan Research Institute</span>
    </div>,
    <div className="quoted" key="3">
        <span>
            We believe we are approaching an inflection point, where the promised potential of blockchain will be realised and be measured in billions of users and trillions of dollars in value.
        </span>
        <h3>Citigroup</h3>
        <span>Money, Tokens and Games</span>
    </div>,
    <div className="quoted" key="4">
       <span>
            The world needs a breakthrough and a new roadmap on climate finance.

        </span>
        <h3>November 2022 Report of the Independent High-Level Expert Group on Climate Finance</h3>
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
