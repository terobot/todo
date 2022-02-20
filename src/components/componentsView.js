import Button from './button'
import Form from './form'
import ComponentItem from './componentItem'
import Service from '../utils/services'
import Handler from '../utils/handlers'

const ComponentsView = (productId) => {
    const componentsView = document.createElement('div')
    const product = Service.getProductById(productId)
    const components = product.components
    const addComponentButton = Button('+', 'addComponent', 'button', 'initial')
    const newComponentForm = Form('newComponent', 'none', 'Component name')
    const submitComponentButton = Button('Submit', 'submitComponent', 'submit', 'initial')
    const cancelComponentButton = Button('Cancel', 'cancelComponent', 'button', 'initial')
    componentsView.classList.add('componentsView')
    componentsView.setAttribute('id', 'componentsView')
    components.map(x => {
        const el = ComponentItem(x)
        componentsView.append(el)
    })
    cancelComponentButton.addEventListener('click', () => Handler.cancelFormInPlace(addComponentButton, newComponentForm))
    newComponentForm.append(submitComponentButton, cancelComponentButton)
    newComponentForm.addEventListener('submit', (e) => Handler.submitNewComponentForm(e, productId))
    addComponentButton.addEventListener('click', () => Handler.openFormInPlace(addComponentButton, newComponentForm))
    componentsView.append(addComponentButton, newComponentForm)
    
    return componentsView
}

export default ComponentsView