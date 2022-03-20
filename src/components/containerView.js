import Input from "./input"
import Image from "./image"
import defaultHeroImage from '../assets/image-add-line.png'
import Handler from "../utils/handlers"

const ContainerView = (container) => {
    const containerView = document.createElement('div')
    const details = document.createElement('div')
    const workContainer = document.createElement('div')
    const title = document.createElement('div')
    const heroImage = Image(container.hero || defaultHeroImage, 'heroImagePreview' + container.title, 'heroImagePreview' + container.title, 'heroImagePreview')
    const uploadHeroImage = Input('chooseHeroImage', 'file', 'initial')
    const description = document.createElement('div')
    containerView.classList.add('containerView')
    containerView.setAttribute('id', container.title + 'View')
    containerView.setAttribute('title', container.title + 'View')
    details.classList.add('containerDetails')
    details.setAttribute('id', container.title + 'Details')
    details.setAttribute('title', container.title + 'Details')
    title.innerHTML = `${container.title} view`
    title.addEventListener('dblclick', () => {
        const currentValue = title.innerHTML
        title.contentEditable = 'true'
        title.focus()
        title.addEventListener('blur', () => {
            title.contentEditable = 'false'
            if (title.innerHTML !== currentValue) {
                console.log('todo: updateTitle')
            }
        })
    })
    uploadHeroImage.addEventListener('change', () => Handler.updateContainerHeroImage(container))
    description.innerHTML = container.description
    description.addEventListener('dblclick', () => {
        const currentValue = description.innerHTML
        description.contentEditable = 'true'
        description.focus()
        description.addEventListener('blur', () => {
            description.contentEditable = 'false'
            if (description.innerHTML !== currentValue) {
                console.log('todo: updateDescription')
            }
        })
    })
    details.append(title, heroImage, uploadHeroImage, description)
    containerView.append(details, workContainer)

    return containerView
}

export default ContainerView