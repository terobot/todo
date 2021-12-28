import Service from '../utils/services'

const ContainerTypeEl = (component, containerType) => {
    const containerTypeEl = document.createElement('div')
    containerTypeEl.classList.add('containerType')
    containerTypeEl.setAttribute('id', component+containerType)

    return containerTypeEl
}

const ComponentEl = (product, component) => {
    const componentEl = document.createElement('div')
    const containerTypes = Service.getProductByTitle(product).containerTypes
    const componentTitle = document.createElement('div')
    componentTitle.innerHTML = `${component}`
    componentEl.append(componentTitle)
    if (containerTypes) {
        containerTypes.map(x => componentEl.appendChild(ContainerTypeEl(component, x)))
    }
    componentEl.classList.add('component')
    componentEl.setAttribute('id', 'component'+component)

    return componentEl
}

const ComponentListHeaderItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `${item}`
    itemEl.classList.add('componentListHeaderItem')
    itemEl.setAttribute('id', 'componentListHeaderItem'+item)

    return itemEl
}

const ComponentListHeader = (product) => {
    const containerTypes = Service.getProductByTitle(product).containerTypes
    const header = document.createElement('div')
    header.append(ComponentListHeaderItem(''))
    containerTypes.map(x => header.append(ComponentListHeaderItem(x)))
    header.classList.add('componentListHeader')
    header.setAttribute('id', 'componentListHeader')

    return header
}

const ComponentList = (product) => {
    const components = Service.getProductByTitle(product).components
    const componentList = document.createElement('div')
    componentList.append(ComponentListHeader(product))
    componentList.classList.add('componentList')
    if (components) {
        components.map(x => componentList.appendChild(ComponentEl(product, x)))
    }
    componentList.setAttribute('id', 'componentList')

    return componentList
}

const HomeView = () => {
    const homeView = document.createElement('div')
    const welcomeMessage = document.createElement('div')
    homeView.classList.add('homeView')
    welcomeMessage.classList.add('welcomeMessage')
    homeView.setAttribute('id', 'homeView')
    welcomeMessage.setAttribute('id', 'welcomeMessage')
    welcomeMessage.innerHTML = 'Welcome! Select or create a product to continue.'
    homeView.append(welcomeMessage)

    return homeView
}

const ProductPanel = () => {
    const productPanel = document.createElement('div')
    productPanel.classList.add('productPanel')
    productPanel.setAttribute('id', 'productPanel')
    productPanel.append(HomeView())

    return productPanel
}

export default {ProductPanel, HomeView, ComponentList}