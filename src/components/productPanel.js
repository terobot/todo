import Service from '../utils/services'

const ComponentEl = (title) => {
    const componentEl = document.createElement('div')
    componentEl.innerHTML = `${title}`
    componentEl.classList.add('component')

    return componentEl
}

const ComponentList = (gameTitle) => {
    const components = Service.getProductByTitle(gameTitle).components
    const componentList = document.createElement('div')
    componentList.classList.add('componentList')
    if (components) {
        components.map(x => componentList.appendChild(ComponentEl(x)))
    }
    console.log(componentList)
    return componentList
}

const ProductPanel = () => {
    const productPanel = document.createElement('div')
    productPanel.classList.add('productPanel')

    return productPanel
}

export default {ProductPanel, ComponentList}