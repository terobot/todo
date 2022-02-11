import Button from './button'
import Form from './form'
import ContainerTypeItem from './containerTypeItem'
import ComponentTitleItem from './componentTitleItem'
import ContainerCard from './containerCard'
import Service from '../utils/services'
import Handler from '../utils/handlers'

const ComponentsView = (productId) => {
    const componentsView = document.createElement('div')
    const product = Service.getProductById(productId)
    const components = product.components 
    const componentQty = product.componentQty
    const containerTypes = product.containerTypes
    const containerTypeQty = product.containerTypeQty
    const containers = product.containers
    const grid = {}
    const root = document.documentElement;
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
        grid.containerTypes = []
        containerTypes.map(x => {
            const el = ContainerTypeItem(x.title)
            el.style.setProperty('grid-column', count+1)
            el.style.setProperty('grid-row', 1)
            componentsView.append(el)
            grid.containerTypes.push({id:x.id, col:count+1})
            count++
        })
    }
    addContainerTypeButton.style.setProperty('grid-column', containerTypeQty+2)
    addContainerTypeButton.style.setProperty('grid-row', 1)
    newContainerTypeForm.style.setProperty('grid-column', containerTypeQty+2)
    newContainerTypeForm.style.setProperty('grid-row', 1)
    cancelContainerTypeButton.addEventListener('click', () => Handler.cancelFormInPlace(addContainerTypeButton, newContainerTypeForm))
    newContainerTypeForm.append(submitContainerTypeButton, cancelContainerTypeButton)
    newContainerTypeForm.addEventListener('submit', (e) => Handler.submitNewContainerTypeForm(e, productId))
    addContainerTypeButton.addEventListener('click', () => Handler.openFormInPlace(addContainerTypeButton, newContainerTypeForm))
    componentsView.append(addContainerTypeButton, newContainerTypeForm)
    if (components) {
        let count = 1
        grid.components = []
        components.map(x => {
            const el = ComponentTitleItem(x.title)
            el.style.setProperty('grid-column', 1)
            el.style.setProperty('grid-row', count+1)
            componentsView.append(el)
            grid.components.push({id:x.id, row:count+1})
            count++
        })
    }
    addComponentButton.style.setProperty('grid-column', 1)
    addComponentButton.style.setProperty('grid-row', componentQty+2)
    newComponentForm.style.setProperty('grid-column', 1)
    newComponentForm.style.setProperty('grid-row', componentQty+2)
    cancelComponentButton.addEventListener('click', () => Handler.cancelFormInPlace(addComponentButton, newComponentForm))
    newComponentForm.append(submitComponentButton, cancelComponentButton)
    newComponentForm.addEventListener('submit', (e) => Handler.submitNewComponentForm(e, productId))
    addComponentButton.addEventListener('click', () => Handler.openFormInPlace(addComponentButton, newComponentForm))
    componentsView.append(addComponentButton, newComponentForm)
    if (containers) {
        grid.nums = []
        grid.containerTypes.map(containerType => {
            grid.components.map(component => {
                grid.nums.push({row:component.row, col: containerType.col, componentId: component.id, containerTypeId: containerType.id})
            })
        })
        containers.map(container => {
            grid.nums.map(x => {
                if (container.components.find(component => component.id === x.componentId) && container.containerTypes.find(containerType => containerType.id === x.containerTypeId)) {
                    const containerCard = ContainerCard(container.title)
                    containerCard.style.setProperty('grid-column', x.col)
                    containerCard.style.setProperty('grid-row', x.row)
                    componentsView.append(containerCard)
                }
            })
        })
        
    }
    //Handler.fillGridWithAddContainerButtons(componentsView, 2, 2, components, containerTypes)

    return componentsView
}

export default ComponentsView