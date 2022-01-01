import Service from '../utils/services'

const AddContainerButton = (component, containerType) => {
    const addContainerButton = document.createElement('div')
    const value = document.createElement('div')
    addContainerButton.classList.add('button')
    addContainerButton.setAttribute('id', 'addContainerButton')
    value.innerHTML = '+'
    addContainerButton.append(value)
    addContainerButton.addEventListener('click', () => {
        const form = NewContainerForm()
        const containerTypeEl = document.getElementById(component+containerType)
        containerTypeEl.append(form)
        addContainerButton.remove()
    })

    return addContainerButton
}

const ContainerTypeEl = (component, containerType) => {
    const containerTypeEl = document.createElement('div')
    containerTypeEl.classList.add('containerType')
    containerTypeEl.setAttribute('id', component+containerType)
    containerTypeEl.append(AddContainerButton(component, containerType))

    return containerTypeEl
}

const ComponentEl = (productTitle, component) => {
    const componentEl = document.createElement('div')
    const containerTypes = Service.getProductByTitle(productTitle).containerTypes
    const componentTitle = document.createElement('div')
    componentTitle.innerHTML = `${component}`
    componentTitle.classList.add('componentTitle')
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

const NewContainerTypeForm = (productTitle) => {
    const form = document.createElement('form')
    const titleField = document.createElement('input')
    const createButton = document.createElement('input')
    const cancelButton = document.createElement('div')
    const header = document.getElementById('componentListHeader')
    titleField.setAttribute('type', 'text')
    titleField.setAttribute('placeholder', 'Container name')
    createButton.setAttribute('type', 'submit')
    createButton.setAttribute('value', 'Create')
    cancelButton.classList.add('button')
    cancelButton.innerHTML = 'Cancel'
    cancelButton.addEventListener('click', () => {
        form.remove()
        header.append(AddContainerTypeButton(productTitle))
    })
    form.setAttribute('id', 'newContainerTypeForm')
    form.append(titleField, createButton, cancelButton)
    form.addEventListener('submit', e => {
        e.preventDefault()
        const newContainerType = {
            title: e.target.elements[0].value,
            id: Math.random()
        }
        Service.addContainerTypeToProduct(productTitle, newContainerType)
        header.append(ComponentListHeaderItem(e.target.elements[0].value))
        form.remove()
        header.append(AddContainerTypeButton(productTitle))
    })

    return form
}

const AddContainerTypeButton = (productTitle) => {
    const addContainerTypeButton = document.createElement('div')
    const value = document.createElement('div')
    addContainerTypeButton.classList.add('button')
    addContainerTypeButton.setAttribute('id', 'addContainerTypeButton')
    value.innerHTML = '+'
    addContainerTypeButton.append(value)
    addContainerTypeButton.addEventListener('click', () => {
        const form = NewContainerTypeForm(productTitle)
        const header = document.getElementById('componentListHeader')
        header.append(form)
        addContainerTypeButton.remove()
    })

    return addContainerTypeButton
}

const ComponentListHeader = (productTitle) => {
    const containerTypes = Service.getProductByTitle(productTitle).containerTypes
    const header = document.createElement('div')
    header.append(ComponentListHeaderItem(''))
    containerTypes.map(x => header.append(ComponentListHeaderItem(x)))
    header.classList.add('componentListHeader')
    header.setAttribute('id', 'componentListHeader')
    header.append(AddContainerTypeButton(productTitle))

    return header
}

const NewComponentForm = (productTitle) => {
    const form = document.createElement('form')
    const titleField = document.createElement('input')
    const createButton = document.createElement('input')
    const cancelButton = document.createElement('div')
    const componentList = document.getElementById('componentList')
    titleField.setAttribute('type', 'text')
    titleField.setAttribute('placeholder', 'Component name')
    createButton.setAttribute('type', 'submit')
    createButton.setAttribute('value', 'Create')
    cancelButton.classList.add('button')
    cancelButton.innerHTML = 'Cancel'
    cancelButton.addEventListener('click', () => {
        form.remove()
        componentList.append(AddComponentButton(productTitle))
    })
    form.setAttribute('id', 'newComponentForm')
    form.append(titleField, createButton, cancelButton)
    form.addEventListener('submit', e => {
        e.preventDefault()
        const newComponent = {
            title: e.target.elements[0].value,
            id: Math.random()
        }
        Service.addComponentToProduct(productTitle, newComponent)
        componentList.append(ComponentEl(productTitle, e.target.elements[0].value))
        form.remove()
        componentList.append(AddComponentButton(productTitle))
    })

    return form
}

const AddComponentButton = (productTitle) => {
    const addComponentButton = document.createElement('div')
    const value = document.createElement('div')
    addComponentButton.classList.add('button')
    addComponentButton.setAttribute('id', 'addComponentButton')
    value.innerHTML = '+'
    addComponentButton.append(value)
    addComponentButton.addEventListener('click', () => {
        const form = NewComponentForm(productTitle)
        const componentList = document.getElementById('componentList')
        componentList.append(form)
        addComponentButton.remove()
    })

    return addComponentButton
}

const ComponentList = (productTitle) => {
    const components = Service.getProductByTitle(productTitle).components
    const componentList = document.createElement('div')
    componentList.append(ComponentListHeader(productTitle))
    componentList.classList.add('componentList')
    if (components) {
        components.map(x => componentList.appendChild(ComponentEl(productTitle, x)))
    }
    componentList.setAttribute('id', 'componentList')
    componentList.append(AddComponentButton(productTitle))

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