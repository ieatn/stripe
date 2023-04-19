const products = [
    {
        name: 'battery', 
        price: '2.99'
    },
    {
        name: 'battery', 
        price: '2.99'
    },
    {
        name: 'battery', 
        price: '2.99'
    },
]

// DOM
const productsContainer = document.querySelector('.products')
const cart = document.querySelector('.cart')

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