import Schema from './schema'

//init product for dev purposes
const products = []
products.push(Schema.Product({title:'Game', id:'1', components:[]}))
products.push(Schema.Product({title:'Webapp', id:'2', components:[]}))
localStorage.setItem('products', JSON.stringify(products))

const getProducts = () => {
    return JSON.parse(localStorage.getItem('products'))
}

const createProduct = (product) => {
    const products = JSON.parse(localStorage.getItem('products')) || []
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}

export default {createProduct, getProducts}