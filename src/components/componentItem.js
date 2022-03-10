import ComponentTitleItem from './componentTitleItem'
import ContainerCard from './containerCard'
import Button from './button'
import Form from './form'
import Handler from '../utils/handlers'

const ComponentItem = (component) => {
    const componentEl = document.createElement('div')
    const containers = component.containers
    const addContainerButton = Button('+', 'addContainer', 'button', 'initial')
    const newContainerForm = Form('newContainer', 'none', 'Container name')
    const submitContainerButton = Button('Submit', 'submitContainer', 'submit', 'initial')
    const cancelContainerButton = Button('Cancel', 'cancelContainer', 'button', 'initial')
    const titleAndButtonEl = document.createElement('div')
    componentEl.classList.add('componentItem')
    componentEl.setAttribute('id', component.title)
    titleAndButtonEl.setAttribute('id', 'titleAndButton')
    titleAndButtonEl.append(ComponentTitleItem(component.title))
    cancelContainerButton.addEventListener('click', () => Handler.cancelFormInPlace(addContainerButton, newContainerForm))
    newContainerForm.append(submitContainerButton, cancelContainerButton)
    newContainerForm.addEventListener('submit', (e) => Handler.submitNewContainerForm(e, component.id, componentEl))
    addContainerButton.addEventListener('click', () => Handler.openFormInPlace(addContainerButton, newContainerForm))
    titleAndButtonEl.append(addContainerButton, newContainerForm)
    componentEl.append(titleAndButtonEl)
    if (containers) {
        containers.map(container => {
            componentEl.append(ContainerCard(container))
        })
    }

    return componentEl
}

export default ComponentItem