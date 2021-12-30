import Service from '../utils/services'
import Product from './productPanel'

const ProductEl = (product) => {
    const productEl = document.createElement('div')
    productEl.innerHTML = `${product}`
    productEl.addEventListener('click', () => {
        const productPanel = document.getElementById('productPanel')
        productPanel.innerHTML = ''
        productPanel.append(Product.ComponentList(product))
    })
    productEl.classList.add('productEl')
    productEl.setAttribute('id', 'productEl'+product)

    return productEl
}

const ProductsMenu = () => {
    const products = document.createElement('div')
    const productsMenu = document.createElement('div')
    const productsMenuTitle = document.createElement('div')
    products.classList.add('products')
    productsMenu.classList.add('productsMenu')
    productsMenuTitle.classList.add('productsMenuTitle')
    products.setAttribute('id', 'products')
    productsMenu.setAttribute('id', 'productsMenu')
    productsMenuTitle.setAttribute('id', 'productsMenuTitle')
    productsMenuTitle.innerHTML = 'Products'
    Service.getProducts().map(x => products.appendChild(ProductEl(x.title)))
    productsMenuTitle.addEventListener('click', () => {
        const productPanel = document.getElementById('productPanel')
        productPanel.innerHTML = ''
        productPanel.append(Product.HomeView())
    })
    productsMenu.append(productsMenuTitle, products)

    return productsMenu
}

const NewProductForm = () => {
    const form = document.createElement('form')
    const titleField = document.createElement('input')
    const createButton = document.createElement('input')
    const cancelButton = document.createElement('div')
    const sidePanel = document.getElementById('sidePanel')
    titleField.setAttribute('type', 'text')
    titleField.setAttribute('placeholder', 'Product name')
    createButton.setAttribute('type', 'submit')
    createButton.setAttribute('value', 'Create')
    cancelButton.classList.add('button')
    cancelButton.innerHTML = 'Cancel'
    cancelButton.addEventListener('click', () => {
        form.remove()
        sidePanel.append(AddProductButton())
    })
    form.setAttribute('id', 'newProductForm')
    form.append(titleField, createButton, cancelButton)
    form.addEventListener('submit', e => {
        e.preventDefault()
        const products = document.getElementById('products')
        const productPanel = document.getElementById('productPanel')
        const newProduct = {
            title: e.target.elements[0].value,
            id: Math.random(),
            components: [],
            containerTypes: []
        }
        Service.createProduct(newProduct)
        products.append(ProductEl(e.target.elements[0].value))
        productPanel.innerHTML = ''
        productPanel.append(Product.ComponentList(newProduct.title))
        form.remove()
        sidePanel.append(AddProductButton())
    })

    return form
}

const AddProductButton = () => {
    const addProductButton = document.createElement('div')
    const value = document.createElement('div')
    addProductButton.classList.add('button')
    addProductButton.setAttribute('id', 'addProductButton')
    value.innerHTML = '+'
    addProductButton.append(value)
    addProductButton.addEventListener('click', () => {
        const form = NewProductForm()
        const sidePanel = document.getElementById('sidePanel')
        sidePanel.append(form)
        addProductButton.remove()
    })

    return addProductButton
}

const SidePanel = () => {
    const sidePanel = document.createElement('div')
    sidePanel.classList.add('sidePanel')
    sidePanel.setAttribute('id', 'sidePanel')
    sidePanel.append(ProductsMenu(), AddProductButton())

    return sidePanel
}

export default SidePanel