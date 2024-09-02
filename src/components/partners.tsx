import { background_partner, partner } from "../assets/assets";

import './scss/partners.scss'

function Partners() {
    return (
        <>
            <div className="partners">
                <section>
                    <div className="image">
                        <img src={partner} alt="" />
                        <img src={background_partner} alt="" />
                    </div>
                    <div className="content">
                        <div className="text">
                            <h1>Parceiros</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="buttonPartner">
                            <button>Confira</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={partner} alt="" />
                        <img src={background_partner} alt="" />
                    </div>
                    <div className="secondContent">
                        <div className="text">
                            <h1>Parceiros</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="buttonPartner">
                            <button>Confira</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Partners;