// import Service from '../utils/services'
// import Product from './productPanel'
// import Button from './button'
// import Form from './form'
// import Handler from '../utils/handlers'

// const ProductEl = (product) => {
//     const productEl = document.createElement('div')
//     productEl.innerHTML = `${product}`
//     productEl.addEventListener('click', () => {
//         const productPanel = document.getElementById('productPanel')
//         productPanel.innerHTML = ''
//         productPanel.append(Product.ComponentList(product))
//     })
//     productEl.classList.add('productEl')
//     productEl.setAttribute('id', 'productEl'+product)

//     return productEl
// }

// const ProductsMenu = () => {
//     const formId = 'newProductForm'
//     const buttonId = 'addProductButton'
//     const products = Service.getProducts()
//     const productsEl = document.createElement('div')
//     const productsMenu = document.createElement('div')
//     const productsMenuTitle = document.createElement('div')
//     const newProductForm = Form(
//         formId,
//         'cancelProductButton',
//         'Cancel',
//         'createProductButton',
//         'Create',
//         'none',
//         'Product name'
//     )
//     const addProductButton = Button(
//         '+',
//         buttonId,
//         'button',
//         'initial'
//     )
//     newProductForm.children.item(2).addEventListener('click', () => {
//         Handler.cancelFormInPlace(buttonId, formId)
//     })
//     newProductForm.addEventListener('submit', (e) => {
//         Handler.submitNewProductForm(
//             e,
//             ProductEl,
//             Product.ComponentList,
//             formId,
//             buttonId
//         )
//     })
//     addProductButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))
//     productsEl.classList.add('products')
//     productsMenu.classList.add('productsMenu')
//     productsMenuTitle.classList.add('productsMenuTitle')
//     productsEl.setAttribute('id', 'products')
//     productsMenu.setAttribute('id', 'productsMenu')
//     productsMenuTitle.setAttribute('id', 'productsMenuTitle')
//     productsMenuTitle.innerHTML = 'Products'
//     if (products) products.map(x => productsEl.appendChild(ProductEl(x.title)))
//     productsMenuTitle.addEventListener('click', () => {
//         const productPanel = document.getElementById('productPanel')
//         productPanel.innerHTML = ''
//         productPanel.append(Product.HomeView())
//     })
//     productsMenu.append(productsMenuTitle, productsEl, addProductButton, newProductForm)

//     return productsMenu
// }

import ProductItem from './productItem'
import List from './list'
import Service from '../utils/services'
import Button from './button'
import Form from './form'
import Title from './title'
import HomeView from './homeView'
import Handler from '../utils/handlers'

const SidePanel = () => { 
    const sidePanel = document.createElement('div')
    const productItems = Service.getProducts().map(x => ProductItem(x.title))
    const addProductButton = Button('+', 'addProduct', 'button', 'initial')
    const newProductForm = Form('newProduct', 'none', 'Product name')
    const submitButton = Button('Submit', 'submitProduct', 'submit', 'initial')
    const cancelButton = Button('Cancel', 'cancelProduct', 'button', 'initial')
    const productListId = 'productList'
    const productList = List(productItems, productListId)
    const productListTitle = Title('Products', 'productList', 'title')
    productListTitle.addEventListener('click', () => Handler.openView(HomeView()))
    cancelButton.addEventListener('click', () => Handler.cancelFormInPlace(addProductButton, newProductForm))
    newProductForm.append(submitButton, cancelButton)
    newProductForm.addEventListener('submit', (e) => Handler.submitNewProductForm(e, newProductForm, addProductButton, productListId))
    addProductButton.addEventListener('click', () => Handler.openFormInPlace(addProductButton, newProductForm))
    sidePanel.classList.add('sidePanel')
    sidePanel.setAttribute('id', 'sidePanel')
    sidePanel.append(
        productListTitle,
        productList,
        addProductButton,
        newProductForm
    )

    return sidePanel
}

export default SidePanel