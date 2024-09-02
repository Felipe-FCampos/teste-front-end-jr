import { partner, background_partner } from "../assets/assets";

import './scss/related.scss'

function Related() {
    return (
        <>
            <div className="relatedInfo">
                <div className="titleContent">
                    <div className="title">
                        <hr />
                        <h1>Produtos relacionados</h1>
                        <hr />
                    </div>
                    <div className="subTitle">
                        <p>Ver todos</p>
                    </div>
                </div>
                <div className="related">
                    <section>
                        <div className="image">
                            <img src={partner} alt="" />
                            <img src={background_partner} alt="" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h1>Produtos</h1>
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
                                <h1>Produtos</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="buttonPartner">
                                <button>Confira</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Related;