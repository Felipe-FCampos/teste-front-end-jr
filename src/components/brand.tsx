import { useRef, useState } from 'react';
import { arrow, camil, doro, grano, logo, mccain } from '../assets/assets';
import './scss/brand.scss'

function Brand() {

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

    const scrollLeftSide = () => {
        if (container.current) {
            container.current.scrollLeft -= 500;
        }
    }

    const scrollRightSide = () => {
        if (container.current) {
            container.current.scrollLeft += 500;
        }
    }

    const brands = [
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: logo },
        { src: mccain, className: 'personalizedBrand' },
        { src: camil, className: 'personalizedBrand' },
        { src: doro, className: 'personalizedBrand' },
        { src: grano, className: 'personalizedBrand' },
    ]

    return (
        <>
            <div className='allBrands'>
                <div className="brandTitle">
                    <h1>Navegue por marcas</h1>
                </div>
                <div
                    ref={container}
                    onMouseDown={mouseDown}
                    onMouseMove={mouseMove}
                    onMouseUp={mouseUp}
                    className="brands">
                    {brands.map((brand, index) => (
                        <div
                            className={`brand ${brand.src === mccain ||
                                    brand.src === camil ||
                                    brand.src === doro ||
                                    brand.src === grano ? 'personalizedBrand' : ''}`} key={index}>
                            <img src={brand.src} alt="" />
                        </div>
                    ))

                    }
                </div>
                <div className="scrollButtonLeftBrand">
                        <button onClick={scrollLeftSide}>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    <div className="scrollButtonRightBrand">
                        <button onClick={scrollRightSide}>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
            </div>
        </>
    )

}

export default Brand;