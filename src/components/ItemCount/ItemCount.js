import './ItemCount.css'
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const decrement = () => (count > 0) ? setCount(count - 1) : (null)
    const increment = () => (count < stock) ? setCount(count + 1) : alert(`No contamos con más de ${stock} productos`)

    return (
        <div className='base'>
            <div className='count'>
                <button onClick={decrement}>-</button>
                {<p>{count}</p>}
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;