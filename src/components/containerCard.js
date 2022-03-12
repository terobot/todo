import Handler from '../utils/handlers'
import defaultHeroImage from '../assets/image-add-line.png'

const ContainerCard = (container) => {
    const card = document.createElement('div')
    const title = document.createElement('div')
    const heroImage = document.createElement('img')
    card.classList.add('containerCard')
    card.setAttribute('id', container.title)
    card.setAttribute('title', container.title)
    title.innerHTML = `${container.title}`
    heroImage.setAttribute('src', container.hero || defaultHeroImage)
    heroImage.setAttribute('alt', 'heroImage' + container.title)
    heroImage.setAttribute('id', 'heroImage' + container.title)
    heroImage.setAttribute('title', 'heroImage' + container.title)
    heroImage.classList.add('heroImage')
    card.append(heroImage, title)
    card.addEventListener('click', () => Handler.openContainer(container))

    return card
}

export default ContainerCard