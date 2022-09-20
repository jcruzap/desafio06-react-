import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <>
            <div className='Cart'>
                <img src={'./asset/comprar.jpeg'} />
                <div className='Counter'>{props.counter}</div>
            </div>
        </>
    )
}

export default CartWidget