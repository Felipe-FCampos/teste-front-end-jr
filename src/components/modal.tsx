import { useState } from 'react';
import { minus, plus } from '../assets/assets';
import { Product } from '../model/product.model';
import './scss/modal.scss'

interface ModalProps {
    product: Product | null;
    onClose: () => void;
}

const ModalProduct: React.FC<ModalProps> = ({ product, onClose }) => {
    if (!product) return null;

    const [value, setValue] = useState(1);

    const addButton = () => {
        setValue(value + 1);
    }

    const subButton = () => {
        if(value > 0) setValue(value - 1);
    }

    return (
        <>
            <div className="modalTemplate">
                <div className='modal'>
                    <button className='closeButton' onClick={onClose}>X</button>
                    
                    <div className="modalImage">
                        <img src={product.photo} alt="" />
                    </div>
                    <div className="modalInfo">

                        <h1>{product.productName}</h1>
                        <h2>R$ {product.price}</h2>

                        <p className='description'>{product.descriptionShort}</p>
                        <p className='detail'>Veja mais detalhes do produto</p>
                        
                        <div className="qtd">
                            <label htmlFor="">
                                <button onClick={subButton}><img src={minus} alt="" /></button>
                                <input 
                                type="text" 
                                value={value}
                                onChange={(a) => setValue(parseInt(a.target.value))}
                                />
                                <button onClick={addButton}><img src={plus} alt="" /></button>
                            </label>
                        </div>

                        <button className='buy'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalProduct;