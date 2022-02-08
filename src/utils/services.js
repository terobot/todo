import Schema from './schema'
import { v4 as uuidv4 } from 'uuid'

//init product for dev purposes
const products = []
const components = []
const containerTypes = []
const gameComponents = [
    Schema.Component({title:'Level1', id: uuidv4()}),
    Schema.Component({title:'Level2', id: uuidv4()}),
    Schema.Component({title:'Level3', id: uuidv4()}),
    Schema.Component({title:'Level4', id: uuidv4()}),
    Schema.Component({title:'Level5', id: uuidv4()})
]
const gameContainerTypes = [
    Schema.ContainerType({title:'Character', id: uuidv4()}),
    Schema.ContainerType({title:'Environment', id: uuidv4()}),
    Schema.ContainerType({title:'Enemy', id: uuidv4()}),
    Schema.ContainerType({title:'Object', id: uuidv4()})
]
const webAppComponents = [
    Schema.Component({title:'LandingPage', id: uuidv4()}),
    Schema.Component({title:'Login', id: uuidv4()}),
    Schema.Component({title:'Sing-up', id: uuidv4()}),
    Schema.Component({title:'Profile', id: uuidv4()}),
    Schema.Component({title:'App', id: uuidv4()})
]
const webAppContainerTypes = [
    Schema.ContainerType({title:'Frontend', id: uuidv4()}),
    Schema.ContainerType({title:'Backend', id: uuidv4()}),
    Schema.ContainerType({title:'Documentation', id: uuidv4()}),
    Schema.ContainerType({title:'Tests', id: uuidv4()})
]

gameComponents.map(x => components.push(x))
gameContainerTypes.map(x => containerTypes.push(x))
webAppComponents.map(x => components.push(x))
webAppContainerTypes.map(x => containerTypes.push(x))
products.push(Schema.Product({title: 'Game', id: uuidv4(), components: gameComponents, containerTypes: gameContainerTypes}))
products.push(Schema.Product({title: 'Webapp', id: uuidv4(), components: webAppComponents, containerTypes: webAppContainerTypes}))
products.push(Schema.Product({title: 'Empty', id: uuidv4(), components: [], containerTypes: []}))
localStorage.setItem('products', JSON.stringify(products))
localStorage.setItem('components', JSON.stringify(components))
localStorage.setItem('containerTypes', JSON.stringify(containerTypes))
console.log(products)
console.log(components)
console.log(containerTypes)

const getProducts = () => {
    return JSON.parse(localStorage.getItem('products')) || []
}

const getProductById = (id) => {
    return getProducts().find(x => x.id === id)
}

const createProduct = (productTitle) => {
    const products = getProducts()
    const productId = uuidv4()
    const newProduct = Schema.Product({title: productTitle, id: productId})
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))

    return newProduct
}

const updateProduct = (productId, updatedProduct) => {
    const products = getProducts()
    const updatedProducts = products.map(x => x.id === productId ? x = updatedProduct : x)
    console.log(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
}

const getComponents = () => {
    return JSON.parse(localStorage.getItem('components')) || []
}

const createComponent = (componentTitle) => {
    const components = getComponents()
    const componentId = uuidv4()
    const newComponent = Schema.Component({title: componentTitle, id: componentId})
    components.push(newComponent)
    localStorage.setItem('components', JSON.stringify(components))

    return newComponent
}

const getContainerTypes = () => {
    return JSON.parse(localStorage.getItem('containerTypes')) || []
}

const createContainerType = (containerTypeTitle) => {
    const containerTypes = getContainerTypes()
    const containerTypeId = uuidv4()
    const newContainerType = Schema.ContainerType({title: containerTypeTitle, id: containerTypeId})
    containerTypes.push(newContainerType)
    localStorage.setItem('containerTypes', JSON.stringify(containerTypes))

    return newContainerType
}

const addContainerTypeToProduct = (productTitle, containerType) => {
    const products = getProducts()
    const product = products.find(x => x.title === productTitle)
    product.containerTypes.push(containerType.title)
    product.containerTypeQty++
    localStorage.setItem('products', JSON.stringify(products))
    console.log(localStorage.products)
}

const getComponentByTitleAndId = () => {

}

const addContainerToComponent = (productTitle, componentTitle, container) => {
    
}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    getComponents,
    createComponent,
    getContainerTypes,
    createContainerType,
    addContainerTypeToProduct,
    addContainerToComponent
}