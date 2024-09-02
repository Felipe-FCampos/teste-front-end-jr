import Header from '../components/header'
import Banner from '../components/banner'
import Options from '../components/options'
import Products from '../components/products'

import Partners from '../components/partners'
import Related from '../components/related'
import Brand from '../components/brand'

import '../App.css'
import Footer from '../components/footer'

function Home() {

    return (
        <>
            <header>
                <Header />
            </header>
            <section>
                <Banner />
            </section>
            <main>
                <div className="options">
                    <Options />
                </div>
                <div>
                    <Products />
                </div>
                <div>
                    <Partners />
                </div>
                <div>
                    <Related />
                </div>
                <div>
                    <Brand />
                </div>
            </main>
            <footer>
                <Footer />                
            </footer>
        </>
    )
}

export default Home
