import Service from '../utils/services'

const ComponentEl = (title) => {
    const componentEl = document.createElement('div')
    componentEl.innerHTML = `${title}`
    componentEl.classList.add('component')
    componentEl.setAttribute('id', 'component'+title)

    return componentEl
}

const ComponentList = (gameTitle) => {
    const components = Service.getProductByTitle(gameTitle).components
    const componentList = document.createElement('div')
    componentList.classList.add('componentList')
    if (components) {
        components.map(x => componentList.appendChild(ComponentEl(x)))
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