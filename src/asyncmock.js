import img1 from '../src/assets/img1.jpeg';
import img2 from '../src/assets/img2.jpeg';
import img3 from '../src/assets/img3.jpeg';

const products = [
    {
        id: 1,
        name: 'Pulsera',
        price: 4200,
        photo: img1,
        stock: 5,
        description: 'Lorem ipsum'
    },
    {
        id: 2,
        name: 'Dije minnie',
        price: 5800,
        photo: img2,
        stock: 9,
        description: 'Lorem ipsum'
    },
    {
        id: 3,
        name: 'Collar',
        price: 4500,
        photo: img3,
        stock: 12,
        description: 'Lorem ipsum'
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000);
    })
}