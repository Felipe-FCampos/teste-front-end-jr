import { useEffect, useRef, useState } from 'react';
import { fetchProducts } from '../service/product.service';
import { Product } from '../model/product.model';

import './scss/products.scss'
import ModalProduct from './modal';
import { arrow } from '../assets/assets';

function Products() {

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

    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product)
    }

    const closeModal = () => {
        setSelectedProduct(null)
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

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Failed to fetch: ', error)
            }
        };

        loadProducts();
    }, []);

    return (
        <>
            <main>
                <div className="title">
                    <hr />
                    <h1>Produtos relacionados</h1>
                    <hr />
                </div>
                <span className='buttonSelectType'>
                    <button className='productType'>
                        <p>Celular</p>
                    </button>
                    <button className='productType'>
                        <p>Acessórios</p>
                    </button>
                    <button className='productType'>
                        <p>Tablets</p>
                    </button>
                    <button className='productType'>
                        <p>Notebooks</p>
                    </button>
                    <button className='productType'>
                        <p>TVs</p>
                    </button>
                    <button className='productType'>
                        <p>Ver todos</p>
                    </button>
                </span>

                <div
                    ref={container}
                    onMouseDown={mouseDown}
                    onMouseMove={mouseMove}
                    onMouseUp={mouseUp}
                    className="listedProducts">
                    {products.map((product, index) => (
                        <div key={index} className='product'>
                            {/* <h2>{product.productName}</h2> */}
                            <img src={product.photo} alt="" />
                            <p className='productName'>{product.descriptionShort}</p>
                            <h2>R$ {product.price + 5000}</h2>
                            <h3>R$ {product.price}</h3>
                            <p className='splitPayment'>ou 2x de R$ {product.price / 2} sem juros</p>
                            <p className='freeDelivery'>Frete grátis</p>
                            <button onClick={() => handleProductSelect(product)}>Comprar</button>
                        </div>
                    ))

                    }
                    <div className="scrollButtonLeft">
                        <button onClick={scrollLeftSide}>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    <div className="scrollButtonRight">
                        <button onClick={scrollRightSide}>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </main>

            {selectedProduct && (
                <ModalProduct product={selectedProduct} onClose={closeModal} />
            )}
        </>
    )
}

export default Products;