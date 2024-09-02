// Header icons and images - - - - - - - - - - - - - - - - - - - - -

import {
    cart,
    creditCard,
    crown,
    group,
    heart,
    logo,
    lupe,
    shieldCheck,
    truck,
    user,
} from '../assets/assets';

import './scss/header.scss'

function Header() {

    return (
        <>
            <main>
                <div className="topText">
                    <span className="text">
                        <img src={shieldCheck} alt="check icon" />
                        <p>Compra <strong>100% segura</strong></p>
                    </span>

                    <span className="text">
                        <img src={truck} alt="delivery" />
                        <p><strong>Frete grátis</strong> acima de R$ 200</p>
                    </span>

                    <span className="text">
                        <img src={creditCard} alt="payment method" />
                        <p><strong>Parcele</strong> suas compras</p>
                    </span>
                </div>
                <section>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search">
                        <label htmlFor="">
                            <input type="text" placeholder='O que você está buscando?'/>
                            <button><img src={lupe} alt="icon used to search products" /></button>
                        </label>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src={group} alt="icon to mhave group of products" />
                        </button>
                        <button>
                            <img src={heart} alt="favorites" />
                        </button>
                        <button>
                            <img src={user} alt="account" />
                        </button>
                        <button>
                            <img src={cart} alt="products the user wants to buy" />
                        </button>
                    </div>
                </section>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>Todas as categorias</li>
                            <li>Supermercado</li>
                            <li>Livros</li>
                            <li>Moda</li>
                            <li>Lançamentos</li>
                            <li>Ofertas do dia</li>
                            <li><img src={crown} alt="premium" />assinatura</li>
                        </ul>
                    </nav>
                </div>
            </main>
        </>
    )
}

export default Header;