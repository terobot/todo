import Service from '../utils/services'

const ComponentEl = (title) => {
    const componentEl = document.createElement('div')
    componentEl.innerHTML = `${title}`
    componentEl.classList.add('component')

    return componentEl
}

const ComponentList = (components) => {
    const componentList = document.createElement('div')
    componentList.classList.add('componentList')
    components.map(x => componentList.appendChild(ComponentEl(x)))
    return componentList
}

const MainContent = () => {
    const mainContent = document.createElement('div')
    const components = Service.getProductByTitle('Game').components
    mainContent.classList.add('mainContent')
    mainContent.appendChild(ComponentList(components))

    return mainContent
}

export default MainContent