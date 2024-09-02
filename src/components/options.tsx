import React, { useRef, useState } from "react";
import {
    bread,
    corrida,
    market,
    moda,
    monitoring,
    safety,
    shopping_cart,
    sushi,
    tools,
    whiskey,
} from "../assets/assets";

import './scss/options.scss'

function Options() {

    const [isClicked, setClick] = useState<number | null>(null)

    const container = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const mouseDown = (roll: React.MouseEvent) => {
        if (container.current) {
            setIsDragging(true);
            setStartX(roll.pageX - container.current.offsetLeft);
            setScrollLeft(container.current.scrollLeft)
        }
    }

    const mouseMove = (roll: React.MouseEvent) => {
        if (!isDragging || !container.current) return;
        const x = roll.pageX - container.current.offsetLeft;
        const walk = x - startX;
        container.current.scrollLeft = scrollLeft - walk
    }

    const mouseUp = () => {
        setIsDragging(false)
    }

    const change = (index: number) => {
        setClick(index)
    }

    const buttons = [
        {    src: monitoring, text: 'Tecnologia'     },
        {    src: market, text: 'Supermercado'    },
        {    src: whiskey, text: 'Bebidas'    },
        {    src: tools, text: 'Ferramentas'    },
        {    src: safety, text: 'Saúde'    },
        {    src: corrida, text: 'Esportes e Fitness'    },
        {    src: moda, text: 'Moda'    },
        {    src: shopping_cart, text: 'Mercados'    },
        {    src: bread, text: 'Padarias'    },
        {    src: sushi, text: 'Oriental'    },
]

    return (
        <>
            <div
                ref={container}
                onMouseDown={mouseDown}
                onMouseMove={mouseMove}
                onMouseUp={mouseUp}
                className="options">

                {buttons.map((button, index) => (
                    <button key={index} onClick={() => change(index)}>
                        <div className={`buttonImage ${isClicked === index ? 'clicked' : ''}`}>
                            <img src={button.src} alt="" />
                        </div>
                        <p className={`buttonText ${isClicked === index ? 'clickedText' : ''}`}>{button.text}</p>
                    </button>
                ))
                }
            </div>
        </>
    )
}

export default Options;