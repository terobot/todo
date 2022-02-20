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
    componentEl.classList.add('componentItem')
    componentEl.setAttribute('id', component.title)
    componentEl.append(ComponentTitleItem(component.title))
    if (containers) {
        containers.map(container => {
            componentEl.append(ContainerCard(container))
        })
    }
    cancelContainerButton.addEventListener('click', () => Handler.cancelFormInPlace(addContainerButton, newContainerForm))
    newContainerForm.append(submitContainerButton, cancelContainerButton)
    newContainerForm.addEventListener('submit', (e) => console.log('todo: add a new container'))
    addContainerButton.addEventListener('click', () => Handler.openFormInPlace(addContainerButton, newContainerForm))
    componentEl.append(addContainerButton, newContainerForm)

    return componentEl
}

export default ComponentItem