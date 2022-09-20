import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ name, price, description, photo, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos`)
    }

    return (
        <section className='detail'>
            <picture>
                <img src={photo} alt={'Lorem ipsum'} />
            </picture>
            <div>
                <p className='name'>{name}</p>
                <p className='description'>{description}</p>
                <p className='price'>$ {price}</p>
                <p className='stock'>Stock disponible <span>{stock}</span> unidades</p>
                <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
            </div>
        </section>
    )
}

export default ItemDetail