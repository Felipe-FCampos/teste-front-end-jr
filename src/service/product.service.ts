import { product } from "../model/product.model";

const apiUrl = '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';


export const fetchProducts = async (): Promise<product[]> => {
    const response = await fetch(apiUrl)

    if (!response.ok){
        throw new Error(`Unable to access the data.`)
    }

    const data = await response.json();
    
    return data.products

}