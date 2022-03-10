import Service from './services'
import ProductItem from '../components/productItem'
import ComponentsView from '../components/componentsView'
import ComponentItem from '../components/componentItem'
import ContainerView from '../components/containerView'

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
    const productTitle = e.target.elements[0].value
    const product = Service.createProduct(productTitle)
    cancelFormInPlace(button, form)
    list.append(ProductItem(product.id, product.title))
    openProduct(product.id)
}

const submitNewComponentForm = (e, productId) => {
    e.preventDefault()
    const product = Service.getProductById(productId)
    const newComponent = Service.createComponent(e.target.elements[0].value)
    product.components.push(newComponent)
    product.componentQty++
    Service.updateProduct(productId, product)
    openProduct(productId)
}

const submitNewContainerForm = (e, componentId, componentEl) => {
    e.preventDefault()
    const component = Service.getComponentById(componentId)
    const newContainer = Service.createContainer(e.target.elements[0].value)
    component.containers.unshift(newContainer)
    Service.updateComponent(componentId, component)
    componentEl.parentNode.replaceChild(ComponentItem(component), componentEl)
}

const openView = (view) => {
    const mainPanel = document.getElementById('mainPanel')
    mainPanel.innerHTML = ''
    mainPanel.append(view)
}

const openProduct = (productId) => {
    openView(ComponentsView(productId))
}

const openContainer = (container) => {
    const containerView = document.getElementsByClassName('containerView')[0]
    //const componentsView = document.getElementById('componentsView')
    const mainPanel = document.getElementById('mainPanel')
    if (containerView) containerView.remove()
    mainPanel.prepend(ContainerView(container))
    //componentsView.prepend(ContainerView(container))
    //openView(ContainerView(container))
}

export default {
    openFormInPlace,
    cancelFormInPlace,
    submitNewProductForm,
    submitNewComponentForm,
    submitNewContainerForm,
    openView,
    openProduct,
    openContainer
}