import Button from './button'
import ContainerTypeItem from './containerTypeItem'
import ComponentTitleItem from './componentTitleItem'
import Service from '../utils/services'

const ComponentsView = (productTitle) => {
    const componentsView = document.createElement('div')
    const componentQty = Service.getProductByTitle(productTitle).componentQty
    const containerTypeQty = Service.getProductByTitle(productTitle).containerTypeQty
    const root = document.documentElement;
    const containerTypes = Service.getProductByTitle(productTitle).containerTypes
    const components = Service.getProductByTitle(productTitle).components  
    const addContainerTypeButton = Button(
        '+',
        'addContainerType',
        'button',
        'initial'
    )
    const addComponentButton = Button(
        '+',
        'addComponent',
        'button',
        'initial'
    )
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
    addContainerTypeButton.addEventListener('click', () => {
        const mainPanel = document.getElementById('mainPanel')
        Service.addContainerTypeToProduct(productTitle, { title: 'New' })
        mainPanel.innerHTML = ''
        mainPanel.append(ComponentsView(productTitle))
    })
    addContainerTypeButton.style.setProperty('grid-column', containerTypeQty+2)
    addContainerTypeButton.style.setProperty('grid-row', 1)
    componentsView.append(addContainerTypeButton)
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
    componentsView.append(addComponentButton)

    return componentsView
}

export default ComponentsView