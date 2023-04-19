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

checkout.addEventListener('click', () => {
    stripe.redirectToCheckout({
        lineItems: [
            { 
                // create new product in stripe and copy price id
                price: 'price_1MygHkFJJLeNOb5q9IbC4PFt',
                quantity: 1,
            },

        ],
        mode: 'payment',
        successUrl: 'https://www.google.com',
        cancelUrl: 'https://www.twitter.com'
    }).then(res => {
        
    })
})