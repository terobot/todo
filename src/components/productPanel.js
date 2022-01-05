import Service from '../utils/services'
import Button from './button'
import Form from './form'
import Handler from '../utils/handlers'

const ContainerTypeEl = (component, containerType) => {
    const containerTypeEl = document.createElement('div')
    containerTypeEl.classList.add('containerType')
    containerTypeEl.setAttribute('id', component+containerType)
    containerTypeEl.append(Button(
        '+',
        component+containerType,
        'button',
        'initial'
    ))

    return containerTypeEl
}

const ComponentListItemEl = (productTitle, component, type) => {
    const componentListItemEl = document.createElement('div')
    const containerTypes = Service.getProductByTitle(productTitle).containerTypes
    const componentTitle = document.createElement('div')
    const formId = 'newContainerTypeForm'
    const buttonId = 'addContainerTypeButton'
    const newContainerTypeForm = Form(
        formId,
        'cancelContainerTypeButton',
        'Cancel',
        'createContainerTypeButton',
        'Create',
        'none',
        'Container type name'
    )
    const addContainerTypeButton = Button(
        '+',
        buttonId,
        'button',
        'initial'
    )
    newContainerTypeForm.children.item(2).addEventListener('click', () => {
        Handler.cancelFormInPlace(buttonId, formId)
    })
    newContainerTypeForm.addEventListener('submit', (e) => {
        Handler.submitNewContainerTypeForm(
            e,
            ComponentListHeaderItem,
            'componentListHeader',
            'componentList',
            ComponentList,
            productTitle,
            formId,
            buttonId
        )
    })
    addContainerTypeButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))
    componentTitle.innerHTML = (type === 'component') ? `${component}` : ''
    componentTitle.classList.add('componentTitle')
    componentListItemEl.append(componentTitle)
    if (containerTypes) {
        containerTypes.map(x => componentListItemEl.appendChild(
            (type === 'component') ? ContainerTypeEl(component, x) : ComponentListHeaderItem(x)
        ))
    }
    if (type === 'header') componentListItemEl.append(addContainerTypeButton, newContainerTypeForm)
    componentListItemEl.classList.add((type === 'component') ? type : 'componentListHeader')
    componentListItemEl.setAttribute('id', (type === 'component') ? type+component : 'componentListHeader')

    return componentListItemEl
}

const ComponentListHeaderItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `${item}`
    itemEl.classList.add('componentListHeaderItem')
    itemEl.setAttribute('id', 'componentListHeaderItem'+item)

    return itemEl
}


const ComponentList = (productTitle) => {
    const components = Service.getProductByTitle(productTitle).components
    const componentList = document.createElement('div')
    const formId = 'newComponentForm'
    const buttonId = 'addComponentButton'
    const newComponentForm = Form(
        formId,
        'cancelProductButton',
        'Cancel',
        'createProductButton',
        'Create',
        'none',
        'Component name'
    )
    const addComponentButton = Button(
        '+',
        buttonId,
        'button',
        'initial'
    )
    newComponentForm.children.item(2).addEventListener('click', () => {
        Handler.cancelFormInPlace(buttonId, formId)
    })
    newComponentForm.addEventListener('submit', (e) => {
        Handler.submitNewComponentForm(
            e,
            ComponentListItemEl,
            productTitle,
            componentList,
            formId,
            buttonId
        )
    })
    addComponentButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))
    componentList.append(ComponentListItemEl(productTitle, 'header', 'header'))
    componentList.classList.add('componentList')
    if (components) {
        components.map(x => componentList.appendChild(ComponentListItemEl(productTitle, x, 'component')))
    }
    componentList.setAttribute('id', 'componentList')
    componentList.append(addComponentButton, newComponentForm)

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