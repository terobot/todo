import Input from "./input"
import Image from "./image"
import defaultHeroImage from '../assets/image-add-line.png'
import Handler from "../utils/handlers"

const ContainerView = (container) => {
    const containerView = document.createElement('div')
    const title = document.createElement('div')
    const heroImage = Image(container.hero || defaultHeroImage, 'heroImagePreview' + container.title, 'heroImagePreview' + container.title, 'heroImagePreview')
    const uploadHeroImage = Input('chooseHeroImage', 'file', 'initial')
    containerView.classList.add('containerView')
    containerView.setAttribute('id', container.title + 'View')
    containerView.setAttribute('title', container.title + 'View')
    title.innerHTML = `${container.title} view`
    uploadHeroImage.addEventListener('change', () => Handler.updateContainerHeroImage(container))
    containerView.append(title, heroImage, uploadHeroImage)

    return containerView
}

export default ContainerView