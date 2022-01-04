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
    const formId = 'newProductForm'
    const buttonId = 'addProductButton'
    const sidePanel = document.createElement('div')
    const newProductForm = Form(
        formId,
        'cancelProductButton',
        'Cancel',
        'createProductButton',
        'Create',
        'none',
        'Product name'
    )
    const addProductButton = Button(
        '+',
        buttonId,
        'button',
        'initial'
    )
    newProductForm.children.item(2).addEventListener('click', () => {
        Handler.cancelFormInPlace(buttonId, formId)
    })
    newProductForm.addEventListener('submit', (e) => {
        Handler.submitNewProductForm(
            e,
            ProductEl,
            Product.ComponentList,
            formId,
            buttonId
        )
    })
    addProductButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))
    sidePanel.classList.add('sidePanel')
    sidePanel.setAttribute('id', 'sidePanel')
    sidePanel.append(ProductsMenu(), addProductButton, newProductForm)

    return sidePanel
}

export default SidePanel