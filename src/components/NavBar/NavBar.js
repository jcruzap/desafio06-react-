import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <>
            <nav className="NavBar">
                <img className='Logo' src={'../assets/logo.png'} />
                <div className='Menu'>
                    <ul>
                        <li><a href='#'>TIENDA</a></li>
                        <li><a href='#'>NOSOTROS</a></li>
                        <li><a href='#'>CONTACTO</a></li>
                    </ul>
                </div>
                <CartWidget counter={0} />
            </nav>
        </>
    )
}

export default NavBar;