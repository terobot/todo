import Service from '../utils/services'
import Button from './button'
import Form from './form'
import Handler from '../utils/handlers'
import ContainerCard from './containerCard'

// const ContainerTypeEl = (component, containerType) => {
//     const containerTypeEl = document.createElement('div')
//     containerTypeEl.classList.add('containerType')
//     containerTypeEl.setAttribute('id', component+containerType)
//     containerTypeEl.append(ContainerCard(component+containerType+'card'))

//     return containerTypeEl
// }

// const ComponentListItemEl = (productTitle, component, type) => {
//     const componentListItemEl = document.createElement('div')
//     const containerTypes = Service.getProductByTitle(productTitle).containerTypes
//     const componentTitle = document.createElement('div')
//     const formId = 'newContainerTypeForm'
//     const buttonId = 'addContainerTypeButton'
//     const newContainerTypeForm = Form(
//         formId,
//         'cancelContainerTypeButton',
//         'Cancel',
//         'createContainerTypeButton',
//         'Create',
//         'none',
//         'Container type name'
//     )
//     const addContainerTypeButton = Button(
//         '+',
//         buttonId,
//         'button',
//         'initial'
//     )
//     newContainerTypeForm.children.item(2).addEventListener('click', () => {
//         Handler.cancelFormInPlace(buttonId, formId)
//     })
//     newContainerTypeForm.addEventListener('submit', (e) => {
//         Handler.submitNewContainerTypeForm(
//             e,
//             ComponentListHeaderItem,
//             'componentListHeader',
//             'productPanel',
//             ComponentList,
//             productTitle,
//             formId,
//             buttonId
//         )
//     })
//     addContainerTypeButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))
//     if (type === 'component') {
//         componentTitle.innerHTML = `${component}`
//         componentTitle.classList.add('componentTitle')
//         componentListItemEl.append(componentTitle)
//     }
//     if (containerTypes) {
//         containerTypes.map(x => componentListItemEl.appendChild(
//             (type === 'component') ? ContainerTypeEl(component, x) : ComponentListHeaderItem(x)
//         ))
//     }
//     if (type === 'header') componentListItemEl.append(addContainerTypeButton, newContainerTypeForm)
//     componentListItemEl.classList.add((type === 'component') ? type : 'componentListHeader')
//     componentListItemEl.setAttribute('id', (type === 'component') ? type+component : 'componentListHeader')

//     return componentListItemEl
// }

// const ComponentListHeaderItem = (item) => {
//     const itemEl = document.createElement('div')
//     itemEl.innerHTML = `${item}`
//     itemEl.classList.add('componentListHeaderItem')
//     itemEl.setAttribute('id', 'componentListHeaderItem'+item)

//     return itemEl
// }


// const ComponentList = (productTitle) => {
//     const components = Service.getProductByTitle(productTitle).components
//     const componentQty = Service.getProductByTitle(productTitle).componentQty
//     const containerTypeQty = Service.getProductByTitle(productTitle).containerTypeQty
//     const componentList = document.createElement('div')
//     const root = document.documentElement;
//     const formId = 'newComponentForm'
//     const buttonId = 'addComponentButton'
//     const newComponentForm = Form(
//         formId,
//         'cancelProductButton',
//         'Cancel',
//         'createProductButton',
//         'Create',
//         'none',
//         'Component name'
//     )
//     const addComponentButton = Button(
//         '+',
//         buttonId,
//         'button',
//         'initial'
//     )
//     newComponentForm.children.item(2).addEventListener('click', () => {
//         Handler.cancelFormInPlace(buttonId, formId)
//     })
//     newComponentForm.addEventListener('submit', (e) => {
//         Handler.submitNewComponentForm(
//             e,
//             ComponentListItemEl,
//             productTitle,
//             componentList,
//             formId,
//             buttonId
//         )
//     })
//     addComponentButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))
//     componentList.append(ComponentListItemEl(productTitle, 'header', 'header'))
//     componentList.classList.add('componentList')
//     if (components) {
//         components.map(x => componentList.appendChild(ComponentListItemEl(productTitle, x, 'component')))
//     }
//     componentList.setAttribute('id', 'componentList')
//     componentList.append(addComponentButton, newComponentForm)
//     root.style.setProperty('--componentQty', componentQty);
//     root.style.setProperty('--containerTypeQty', containerTypeQty);

//     return componentList
// }

const ComponentListHeaderItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `${item}`
    itemEl.classList.add('componentListHeaderItem')
    itemEl.setAttribute('id', 'componentListHeaderItem'+item)

    return itemEl
}

const ComponentTitleItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `${item}`
    itemEl.classList.add('componentTitle')
    itemEl.setAttribute('id', 'componentTitle'+item)

    return itemEl
}

const ComponentList = (productTitle) => {
    const componentQty = Service.getProductByTitle(productTitle).componentQty
    const containerTypeQty = Service.getProductByTitle(productTitle).containerTypeQty
    const componentList = document.createElement('div')
    const root = document.documentElement;
    const containerTypes = Service.getProductByTitle(productTitle).containerTypes
    const components = Service.getProductByTitle(productTitle).components
    componentList.classList.add('componentList')
    componentList.setAttribute('id', 'componentList')
    root.style.setProperty('--componentListRows', componentQty+1);
    root.style.setProperty('--componentListCols', containerTypeQty+2);
    if (containerTypes) {
        let count = 1
        containerTypes.map(x => {
            const el = ComponentListHeaderItem(x)
            el.style.setProperty('grid-column', count+1)
            el.style.setProperty('grid-row', 1)
            componentList.append(el)
            count++
        })
    }
    if (components) {
        let count = 1
        components.map(x => {
            const el = ComponentTitleItem(x)
            el.style.setProperty('grid-column', 1)
            el.style.setProperty('grid-row', count+1)
            componentList.append(el)
            count++
        })
    }

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