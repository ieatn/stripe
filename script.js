const products = [
    {
        name: 'battery', 
        price: 2.99
    },
    {
        name: 'battery', 
        price: 2.99
    },
    {
        name: 'battery', 
        price: 2.99
    },
]

// DOM
const productsContainer = document.querySelector('.products')
const cart = document.querySelector('.cart')
const checkout = document.querySelector('#checkout')

const showProducts = () => {
    products.forEach(i => {
        const product = document.createElement('div')
        product.innerHTML = 
        `
            <div>
                <p>${i.name}</p>
                <p>${i.price}</p>
                <button>add</button>
            </div>
        `
        productsContainer.appendChild(product)
    })

}

showProducts()

const addButtons = document.querySelectorAll('button')

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked')
        const product = button.parentNode
        const name = product.querySelector('p:first-child').textContent
        const price = parseFloat(product.querySelector('p:nth-child(2)').textContent)
        console.log(name, price)
    })
})

// STRIPE
// pk
const stripe = Stripe('pk_test_1s5WylQ8DGGaYBscy5k5L1Lc00v0yymxZW');


const cartItems = [
    { id: 'item1', name: 'Product 1', price: 'price_1MjYIrFJJLeNOb5qceSUUiws', quantity: 2 },
    { id: 'item2', name: 'Product 2', price: 'price_1MygHkFJJLeNOb5q9IbC4PFt', quantity: 1 },
];

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