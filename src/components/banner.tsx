import { background, shadow } from "../assets/assets"

import './scss/banner.scss'

function banner() {

    return (
        <>
            <main>
                <div className="banner">
                    <img src={background} alt="main image" />
                    <img src={shadow} alt="shadow to main image" />
                </div>

                <div className="textImage">
                    <h1>Venha conhecer nossas promoções</h1>

                    <h2>50% Off nos produtos</h2>

                    <button>Ver produto</button>
                </div>
            </main>
        </>
    )
}

export default banner