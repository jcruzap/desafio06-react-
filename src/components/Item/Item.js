import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({ name, price, photo, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos`)
    }

    return (
        <section>
            <picture>
                <img src={photo} alt='Lorem ipsum' />
            </picture>
            <p className='name'>{name}</p>
            <p className='price'>$ {price}</p>
            <p className='stock'>Stock disponible <span>{stock}</span> unidades</p>
            <button className='detalles'>Ver detalle</button>
            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        </section>
    )
}

export default Item;