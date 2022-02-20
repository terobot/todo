const ContainerCard = (container) => {
    const card = document.createElement('div')
    const title = document.createElement('div')
    card.classList.add('containerCard')
    card.setAttribute('id', container.title)
    card.setAttribute('title', container.title)
    title.innerHTML = `${container.title}`
    card.append(title)

    return card
}

export default ContainerCard