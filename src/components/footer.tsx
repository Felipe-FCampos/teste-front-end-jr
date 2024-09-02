import { alelo, amex, dinners, econverseLogo, elo, facebook, ifood, instagram, mastercard, pix, sodexo, ticket, visa, vtex, youtube } from '../assets/assets';
import './scss/footer.scss'

function Footer() {
    return (
        <>
            <div className="footer">
                <section className='footerInfo'>
                    <div className="companyInfo">
                        <div className="aboutUs">
                            <h1>Sobre nós</h1>
                            <nav>
                                <ul>
                                    <li><a href="">Conheça</a></li>
                                    <li><a href="">Como comprar</a></li>
                                    <li><a href="">Indicação e Desconto</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="socialMedia">
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>

                    <div className="info">
                        <h1>Informações úteis</h1>
                        <nav>
                            <ul>
                                <li><a href="">Fale conosco</a></li>
                                <li><a href="">dúvidas</a></li>
                                <li><a href="">prazos de entrega</a></li>
                                <li><a href="">formas de pagamento</a></li>
                                <li><a href="">política de privacidade</a></li>
                                <li><a href="">troca e devoluções</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="payment">
                        <h1>Formas de pagamento</h1>
                        <div className="methods">
                            <img src={visa} alt="" />
                            <img src={elo} alt="" />
                            <img src={alelo} alt="" />
                            <img src={dinners} alt="" />
                            <img src={ifood} alt="" />
                            <img src={mastercard} alt="" />
                            <img src={pix} alt="" />
                            <img src={amex} alt="" />
                            <img src={ticket} alt="" />
                            <img src={sodexo} alt="" />
                        </div>
                    </div>
                </section>
                <section className='sign'>
                    <h1>Cadastre-se e Receba nossas</h1>
                    <h2>novidades e promoções</h2>
                    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <div className="news">
                        <input type="email" placeholder='seu e-mail' />
                        <button>ok</button>
                    </div>
                </section>
            </div>
            <aside className='lastFooter'>
                <div>
                    <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.</p>
                    <p>É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                </div>
                <div className="logos">
                    <img src={econverseLogo} alt="" />
                    <img src={vtex} alt="" />
                </div>
            </aside>
        </>
    )
}

export default Footer;