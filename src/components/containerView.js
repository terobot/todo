import Input from "./input"
import defaultHeroImage from '../assets/image-add-line.png'

const ContainerView = (container) => {
    const containerView = document.createElement('div')
    const title = document.createElement('div')
    const heroImage = document.createElement('img')
    const uploadHeroImage = Input('chooseHeroImage', 'file', 'initial')
    containerView.classList.add('containerView')
    containerView.setAttribute('id', container.title + 'View')
    containerView.setAttribute('title', container.title + 'View')
    title.innerHTML = `${container.title} view`
    heroImage.setAttribute('src', container.hero || defaultHeroImage)
    heroImage.setAttribute('alt', 'heroImagePreview' + container.title)
    heroImage.setAttribute('id', 'heroImagePreview' + container.title)
    heroImage.setAttribute('title', 'heroImagePreview' + container.title)
    heroImage.classList.add('heroImagePreview')
    uploadHeroImage.addEventListener('change', () => {
        //TODO: Move away from here
        const cardImage = document.getElementById('heroImage' + container.title)
        const previewImage = document.getElementById('heroImagePreview' + container.title)
        const newImage = document.getElementById('chooseHeroImage').files[0]
        const newImageSrc = URL.createObjectURL(newImage)
        const containers = JSON.parse(localStorage.getItem('containers'))
        const components = JSON.parse(localStorage.getItem('components'))
        let componentId = undefined
        let componentItem = undefined
        const products = JSON.parse(localStorage.getItem('products'))
        cardImage.setAttribute('src', newImageSrc)
        previewImage.setAttribute('src', newImageSrc)
        container.hero = cardImage.src
        containers.map(x => x.id === container.id ? x.hero = container.hero : x)
        localStorage.setItem('containers', JSON.stringify(containers))
        components.map(component => {
            const index = component.containers.findIndex(x => x.id === container.id)
            if (index !== -1) {
                component.containers[index] = container
                componentId = component.id
                componentItem = component
            }
        })
        localStorage.setItem('components', JSON.stringify(components))
        products.map(product => {
            const index = product.components.findIndex(x => x.id === componentId)
            if (index !== -1) product.components[index] = componentItem
        })
        localStorage.setItem('products', JSON.stringify(products))
    })
    containerView.append(title, heroImage, uploadHeroImage)

    return containerView
}

export default ContainerView