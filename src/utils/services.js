import Schema from './schema'
import { v4 as uuidv4 } from 'uuid'

//init product for dev purposes
const products = []
const components = []
const containers = []
const l1containers = [
    Schema.Component({title:'Story', id: uuidv4()}),
    Schema.Component({title:'Characters', id: uuidv4()}),
    Schema.Component({title:'Enemies', id: uuidv4()}),
    Schema.Component({title:'Objects', id: uuidv4()}),
    Schema.Component({title:'Environment', id: uuidv4()}),
    Schema.Component({title:'Mechanics', id: uuidv4()})
]
const gameComponents = [
    Schema.Component({title:'Level1', id: uuidv4(), containers: l1containers}),
    Schema.Component({title:'Level2', id: uuidv4()}),
    Schema.Component({title:'Level3', id: uuidv4()}),
    Schema.Component({title:'Level4', id: uuidv4()}),
    Schema.Component({title:'Level5', id: uuidv4()})
]
const webAppComponents = [
    Schema.Component({title:'LandingPage', id: uuidv4()}),
    Schema.Component({title:'Login', id: uuidv4()}),
    Schema.Component({title:'Sing-up', id: uuidv4()}),
    Schema.Component({title:'Profile', id: uuidv4()}),
    Schema.Component({title:'App', id: uuidv4()})
]

gameComponents.map(x => components.push(x))
webAppComponents.map(x => components.push(x))
l1containers.map(x => containers.push(x))
products.push(Schema.Product({title: 'Game', id: uuidv4(), components: gameComponents}))
products.push(Schema.Product({title: 'Webapp', id: uuidv4(), components: webAppComponents}))
products.push(Schema.Product({title: 'Empty', id: uuidv4(), components: []}))
localStorage.setItem('products', JSON.stringify(products))
localStorage.setItem('components', JSON.stringify(components))
localStorage.setItem('containers', JSON.stringify(containers))
console.log(products)
console.log(components)
console.log(containers)

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
    localStorage.setItem('products', JSON.stringify(updatedProducts))
}

const getComponents = () => {
    return JSON.parse(localStorage.getItem('components')) || []
}

const getComponentById = (id) => {
    return getComponents().find(x => x.id === id)
}

const createComponent = (componentTitle) => {
    const components = getComponents()
    const componentId = uuidv4()
    const newComponent = Schema.Component({title: componentTitle, id: componentId})
    components.push(newComponent)
    localStorage.setItem('components', JSON.stringify(components))

    return newComponent
}

const updateComponent = (componentId, updatedComponent) => {
    const components = getComponents()
    const products = getProducts()
    const updatedComponents = components.map(x => x.id === componentId ? x = updatedComponent : x)
    products.map(product => {
        const index = product.components.findIndex(component => component.id === componentId)
        if (index !== -1) product.components[index] = updatedComponent
    })
    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('components', JSON.stringify(updatedComponents))
}

const getContainers = () => {
    return JSON.parse(localStorage.getItem('containers')) || []
}

const createContainer = (containerTitle) => {
    const containers = getContainers()
    const containerId = uuidv4()
    const newContainer = Schema.Container({title: containerTitle, id: containerId})
    containers.push(newContainer)
    localStorage.setItem('containers', JSON.stringify(containers))

    return newContainer
}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    getComponents,
    getComponentById,
    createComponent,
    updateComponent,
    getContainers,
    createContainer
}