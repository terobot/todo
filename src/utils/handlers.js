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

const submitNewComponentForm = (e, ComponentListItemEl, productTitle, componentList, formId, buttonId) => {
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
        ComponentListItemEl(productTitle, e.target.elements[0].value, 'component'),
        button,
        form
    )
    form.style.display = 'none'
    Array.from(form.children).map(x => x.value = '')
    button.style.display = 'initial'
}

const submitNewContainerTypeForm = (e, ComponentListHeaderItem, header, productPanelId, ComponentList, productTitle, formId, buttonId) => {
    e.preventDefault()
    const form = document.getElementById(formId)
    const button = document.getElementById(buttonId)
    const headerEl = document.getElementById(header)
    const productPanel = document.getElementById(productPanelId)
    const newContainerType = {
        title: e.target.elements[0].value,
        id: Math.random()
    }
    Service.addContainerTypeToProduct(productTitle, newContainerType)
    form.remove()
    button.remove()
    headerEl.append(
        ComponentListHeaderItem(e.target.elements[0].value),
        button,
        form
    )
    form.style.display = 'none'
    Array.from(form.children).map(x => x.value = '')
    button.style.display = 'initial'
    productPanel.innerHTML = ''
    productPanel.append(ComponentList(productTitle))
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