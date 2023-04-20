const products = [
    { id: 'item1', name: 'Shoes', cost: '$20.00', price: 'price_1MjYIrFJJLeNOb5qceSUUiws', quantity: 1 },
    { id: 'item2', name: 'Battery', cost: '$2.99', price: 'price_1MygHkFJJLeNOb5q9IbC4PFt', quantity: 1 },
]

const cartItems = []

// DOM
const productsContainer = document.querySelector('.products')
const checkout = document.querySelector('#checkout')

const showProducts = () => {
    products.forEach(i => {
        const product = document.createElement('div')
        product.innerHTML = 
        `
            <div>
                <p>${i.name}</p>
                <p>${i.cost}</p>
                <button id='addBtn'>add</button>
            </div>
        `
        productsContainer.appendChild(product)
        const addButton = product.querySelector('#addBtn');
        addButton.addEventListener('click', () => {
            addToCart(i);
        });
    })
}

showProducts()

const addToCart = (product) => {
    cartItems.push(product);
    console.log(cartItems);
    const lineItems = cartItems.map(item => {
        return {
            price: `${item.price}`,
            quantity: item.quantity,
        };
    });
    
    checkout.addEventListener('click', () => {
        stripe.redirectToCheckout({
            lineItems: lineItems,
            mode: 'payment',
            successUrl: 'https://www.google.com',
            cancelUrl: 'http://127.0.0.1:5500/'
        })
    })
}

// STRIPE
// pk
const stripe = Stripe('pk_test_1s5WylQ8DGGaYBscy5k5L1Lc00v0yymxZW');

