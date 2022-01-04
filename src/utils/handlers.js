import Service from './services'

const openFormInPlace = (openFormButtonId, formId) => {
    const buttonEl = document.getElementById(openFormButtonId)
    const formEl = document.getElementById(formId)
    buttonEl.style.display = 'none'
    formEl.style.display = 'initial'
    formEl.children.item(0).focus()
}

const cancelFormInPlace = (openFormButtonId, formId) => {
    const buttonEl = document.getElementById(openFormButtonId)
    const formEl = document.getElementById(formId)
    buttonEl.style.display = 'initial'
    formEl.style.display = 'none'
    Array.from(formEl.children).map(x => x.value = '')
} 

const submitNewProductForm = (e, ProductEl, ComponentList, formId, buttonId) => {
    e.preventDefault()
    const products = document.getElementById('products')
    const productPanel = document.getElementById('productPanel')
    const form = document.getElementById(formId)
    const button = document.getElementById(buttonId)
    const newProduct = {
        title: e.target.elements[0].value,
        id: Math.random(),
        components: [],
        containerTypes: []
    }
    Service.createProduct(newProduct)
    products.append(ProductEl(e.target.elements[0].value))
    productPanel.innerHTML = ''
    productPanel.append(ComponentList(e.target.elements[0].value))
    form.style.display = 'none'
    Array.from(form.children).map(x => x.value = '')
    button.style.display = 'initial'
}

const submitNewComponentForm = (e, ComponentEl, productTitle, componentList, formId, buttonId) => {
    e.preventDefault()
    const form = document.getElementById(formId)
    const button = document.getElementById(buttonId)
    const newComponent = {
        title: e.target.elements[0].value,
        id: Math.random()
    }
    Service.addComponentToProduct(productTitle, newComponent)
    form.remove()
    button.remove()
    componentList.append(
        ComponentEl(productTitle, e.target.elements[0].value),
        button,
        form
    )
    form.style.display = 'none'
    Array.from(form.children).map(x => x.value = '')
    button.style.display = 'initial'
}

export default {
    openFormInPlace,
    submitNewProductForm,
    cancelFormInPlace,
    submitNewComponentForm
}