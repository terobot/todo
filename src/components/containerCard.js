import Handler from '../utils/handlers'
import Image from './image'
import defaultHeroImage from '../assets/image-add-line.png'

const ContainerCard = (container) => {
    const card = document.createElement('div')
    const title = document.createElement('div')
    const heroImage = Image(container.hero || defaultHeroImage, 'heroImage' + container.title, 'heroImage' + container.title, 'heroImage')
    card.classList.add('containerCard')
    card.setAttribute('id', container.title)
    card.setAttribute('title', container.title)
    title.innerHTML = `${container.title}`
    card.append(heroImage, title)
    card.addEventListener('click', () => Handler.openContainer(container))

    return card
}

export default ContainerCard