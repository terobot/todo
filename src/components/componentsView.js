import Button from './button'
import Form from './form'
import ContainerTypeItem from './containerTypeItem'
import ComponentTitleItem from './componentTitleItem'
import Service from '../utils/services'
import Handler from '../utils/handlers'

const ComponentsView = (productTitle) => {
    const componentsView = document.createElement('div')
    const componentQty = Service.getProductByTitle(productTitle).componentQty
    const containerTypeQty = Service.getProductByTitle(productTitle).containerTypeQty
    const root = document.documentElement;
    const containerTypes = Service.getProductByTitle(productTitle).containerTypes
    const components = Service.getProductByTitle(productTitle).components  
    const addContainerTypeButton = Button('+', 'addContainerType', 'button', 'initial')
    const newContainerTypeForm = Form('newContainerType', 'none', 'Container type name')
    const submitContainerTypeButton = Button('Submit', 'submitContainerType', 'submit', 'initial')
    const cancelContainerTypeButton = Button('Cancel', 'cancelContainerType', 'button', 'initial')
    const addComponentButton = Button('+', 'addComponent', 'button', 'initial')
    const newComponentForm = Form('newComponent', 'none', 'Component name')
    const submitComponentButton = Button('Submit', 'submitComponent', 'submit', 'initial')
    const cancelComponentButton = Button('Cancel', 'cancelComponent', 'button', 'initial')
    componentsView.classList.add('componentsView')
    componentsView.setAttribute('id', 'componentsView')
    root.style.setProperty('--componentListRows', componentQty);
    root.style.setProperty('--componentListCols', containerTypeQty+2);
    if (containerTypes) {
        let count = 1
        containerTypes.map(x => {
            const el = ContainerTypeItem(x)
            el.style.setProperty('grid-column', count+1)
            el.style.setProperty('grid-row', 1)
            componentsView.append(el)
            count++
        })
    }
    addContainerTypeButton.style.setProperty('grid-column', containerTypeQty+2)
    addContainerTypeButton.style.setProperty('grid-row', 1)
    newContainerTypeForm.style.setProperty('grid-column', containerTypeQty+2)
    newContainerTypeForm.style.setProperty('grid-row', 1)
    cancelContainerTypeButton.addEventListener('click', () => Handler.cancelFormInPlace(addContainerTypeButton, newContainerTypeForm))
    newContainerTypeForm.append(submitContainerTypeButton, cancelContainerTypeButton)
    newContainerTypeForm.addEventListener('submit', (e) => Handler.submitNewContainerTypeForm(e, productTitle))
    addContainerTypeButton.addEventListener('click', () => Handler.openFormInPlace(addContainerTypeButton, newContainerTypeForm))
    componentsView.append(addContainerTypeButton, newContainerTypeForm)
    if (components) {
        let count = 1
        components.map(x => {
            const el = ComponentTitleItem(x)
            el.style.setProperty('grid-column', 1)
            el.style.setProperty('grid-row', count+1)
            componentsView.append(el)
            count++
        })
    }
    addComponentButton.style.setProperty('grid-column', 1)
    addComponentButton.style.setProperty('grid-row', componentQty+2)
    newComponentForm.style.setProperty('grid-column', 1)
    newComponentForm.style.setProperty('grid-row', componentQty+2)
    cancelComponentButton.addEventListener('click', () => Handler.cancelFormInPlace(addComponentButton, newComponentForm))
    newComponentForm.append(submitComponentButton, cancelComponentButton)
    newComponentForm.addEventListener('submit', (e) => Handler.submitNewComponentForm(e, productTitle))
    addComponentButton.addEventListener('click', () => Handler.openFormInPlace(addComponentButton, newComponentForm))
    componentsView.append(addComponentButton, newComponentForm)

    return componentsView
}

export default ComponentsView