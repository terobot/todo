import Service from './services'

const openFormInPlace = (args) => {
    const buttonEl = document.getElementById(args[0])
    const formEl = document.getElementById(args[1])
    buttonEl.style.display = 'none'
    formEl.style.display = 'initial'
}

const cancelFormInPlace = (args) => {
    const buttonEl = document.getElementById(args[0])
    const formEl = document.getElementById(args[1])
    buttonEl.style.display = 'initial'
    formEl.style.display = 'none'
} 

const submitNewProductForm = (e, args) => {
    e.preventDefault()
    const products = document.getElementById('products')
    const productPanel = document.getElementById('productPanel')
    const form = document.getElementById(args[2])
    const button = document.getElementById(args[3])
    const newProduct = {
        title: e.target.elements[0].value,
        id: Math.random(),
        components: [],
        containerTypes: []
    }
    Service.createProduct(newProduct)
    products.append(args[0](e.target.elements[0].value))
    productPanel.innerHTML = ''
    productPanel.append(args[1](e.target.elements[0].value))
    form.style.display = 'none'
    button.style.display = 'initial'
}

export default {openFormInPlace, submitNewProductForm, cancelFormInPlace}