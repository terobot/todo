import Service from '../utils/services'
import Product from './productPanel'
import Button from './button'
import Form from './form'
import Handler from '../utils/handlers'

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

const SidePanel = () => {
    const sidePanel = document.createElement('div')
    const newProductForm = Form(
        'newProductForm',
        'none',
        Handler.submitNewProductForm,
        [ProductEl, Product.ComponentList, 'newProductForm', 'addProductButton'],
        Handler.cancelFormInPlace,
        ['addProductButton', 'newProductForm'],
        'Product name'
    )
    const addProductButton = Button(
        '+',
        'addProductButton',
        'button',
        'initial',
        Handler.openFormInPlace,
        ['addProductButton', 'newProductForm']
    )
    sidePanel.classList.add('sidePanel')
    sidePanel.setAttribute('id', 'sidePanel')
    sidePanel.append(ProductsMenu(), addProductButton, newProductForm)

    return sidePanel
}

export default SidePanel