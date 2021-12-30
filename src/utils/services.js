import Schema from './schema'

//init product for dev purposes
const products = []
const gameComponents = [
    'Level1',
    'Level2',
    'Level3',
    'Level4',
    'Level5'
]
const gameContainerTypes = [
    'Character',
    'Environment',
    'Enemy',
    'Object'
]
const webAppComponents = [
    'LandingPage',
    'Login',
    'Sing-up',
    'Profile',
    'App'
]
const webAppContainerTypes = [
    'Frontend',
    'Backend',
    'Documentation',
    'Tests'
]

products.push(Schema.Product({title:'Game', id:'1', components: gameComponents, containerTypes: gameContainerTypes}))
products.push(Schema.Product({title:'Webapp', id:'2', components: webAppComponents, containerTypes: webAppContainerTypes}))
products.push(Schema.Product({title: 'Empty', id:'3', components: [], containerTypes: []}))
localStorage.setItem('products', JSON.stringify(products))
console.log(products)

const getProducts = () => {
    return JSON.parse(localStorage.getItem('products'))
}

const getProductByTitle = (title) => {
    return getProducts().find(x => x.title === title)
}

const createProduct = (product) => {
    const products = JSON.parse(localStorage.getItem('products')) || []
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}

const addComponentToProduct = (productTitle, component) => {
    const products = getProducts()
    const product = products.find(x => x.title === productTitle)
    product.components.push(component.title)
    localStorage.setItem('products', JSON.stringify(products))
}

const addContainerTypeToProduct = (productTitle, containerType) => {
    const products = getProducts()
    const product = products.find(x => x.title === productTitle)
    product.containerTypes.push(containerType.title)
    localStorage.setItem('products', JSON.stringify(products))
    console.log(localStorage.products)
}

export default {createProduct, getProducts, getProductByTitle, addComponentToProduct, addContainerTypeToProduct}