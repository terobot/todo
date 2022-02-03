import Service from './services'
import ProductItem from '../components/productItem'
import ComponentsView from '../components/componentsView'

const openFormInPlace = (button, form) => {
    button.style.display = 'none'
    form.style.display = 'initial'
    form.children.item(0).focus()
}

const cancelFormInPlace = (button, form) => {
    button.style.display = 'initial'
    form.style.display = 'none'
    Array.from(form.children).map(x => x.value = '')
} 

const submitNewProductForm = (e, form, button, listId) => {
    e.preventDefault()
    const list = document.getElementsByClassName('list')[listId]
    const newProduct = {
        title: e.target.elements[0].value,
        id: `${Service.getProducts().length+1}`,
        components: [],
        containerTypes: [],
        componentQty: 0,
        containerTypeQty: 0
    }
    Service.createProduct(newProduct)
    cancelFormInPlace(button, form)
    list.append(ProductItem(newProduct.title))
    openProduct(newProduct.title)
}

const submitNewComponentForm = (e, productTitle) => {
    e.preventDefault()
    const newComponent = {
        title: e.target.elements[0].value,
        id: `${Service.getProducts().componentQty+1}`
    }
    Service.addComponentToProduct(productTitle, newComponent)
    openProduct(productTitle)
}

const submitNewContainerTypeForm = (e, productTitle) => {
    e.preventDefault()
    const newContainerType = {
        title: e.target.elements[0].value,
        id: `${Service.getProducts().containerTypeQty+1}`
    }
    Service.addContainerTypeToProduct(productTitle, newContainerType)
    openProduct(productTitle)
}

const openProduct = (productTitle) => {
    const mainPanel = document.getElementById('mainPanel')
    mainPanel.innerHTML = ''
    mainPanel.append(ComponentsView(productTitle))
}

const openView = (view) => {
    const mainPanel = document.getElementById('mainPanel')
    mainPanel.innerHTML = ''
    mainPanel.append(view)
}

export default {
    openFormInPlace,
    cancelFormInPlace,
    submitNewProductForm,
    submitNewComponentForm,
    submitNewContainerTypeForm,
    openProduct,
    openView
}