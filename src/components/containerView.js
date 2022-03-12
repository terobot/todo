import Input from "./input"

const ContainerView = (container) => {
    const containerView = document.createElement('div')
    const title = document.createElement('div')
    const uploadHeroImage = Input('chooseHeroImage', 'file', 'initial')
    containerView.classList.add('containerView')
    containerView.setAttribute('id', container.title + 'View')
    containerView.setAttribute('title', container.title + 'View')
    title.innerHTML = `${container.title} view`
    console.log(container.hero)
    containerView.append(title, uploadHeroImage)

    return containerView
}

export default ContainerView