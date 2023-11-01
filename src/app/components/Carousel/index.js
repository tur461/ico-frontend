
'use client' 
import { useState } from "react"
import CarouselCard from "./CarouselCard"
import Image from "next/image"

import "./styles.scss"

export default function Carousel(props) {
    const cards = props.cards
    const [activeIndex, setActiveIndex] = useState(0)

    const dotClickCbk = i => setActiveIndex(i)
    const nextBtnCbk = _ => setActiveIndex((activeIndex - 1 + cards.length) % cards.length)
    const prevBtnCbk = _ => setActiveIndex((activeIndex + 1) % cards.length)

    return (
        <div className="carouselContainer">
            <div className="content">
                <Image
                    alt="prvBtn" 
                    className="prevBtn"
                    src={props.prevIcon.src} 
                    onClick={_ => nextBtnCbk()} 
                    width={100} 
                    height={100}
                />
                <div className="carouselCards">
                    {
                        cards.map((card, index) => (
                            <CarouselCard
                                extra={props}
                                key={index}
                                content={card}
                                className={
                                    index === activeIndex ? 
                                    "active" : index < activeIndex ? 
                                    "inactive-left" : "inactive-right"
                                }
                            ></CarouselCard>
                        ))
                    }
                </div>
                    <Image 
                        alt="nextBtn" 
                        className="nextBtn"
                        src={props.nextIcon.src} 
                        onClick={_ => prevBtnCbk()} 
                        width={100} 
                        height={100}
                    />
            </div>
            <div className="dots">
                {
                    cards.map((_, index) => (
                        <span
                            key={index}
                            onClick={_ => dotClickCbk(index)}
                            className={index === activeIndex ? "dot active" : "dot"}
                        ></span>
                    ))
                }
            </div>
        </div>
    )
}