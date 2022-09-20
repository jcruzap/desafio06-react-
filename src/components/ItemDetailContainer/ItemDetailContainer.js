import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductsById(3)
            .then(prods => {
                setProduct(prods)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <ItemDetail product={product} key={product.id} {...product} />
            {console.log(product.id)}
        </div>
    )
}
export default ItemDetailContainer