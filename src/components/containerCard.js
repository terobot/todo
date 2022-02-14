const ContainerCard = (id) => {
    const card = document.createElement('div')
    card.classList.add('containerCard')
    card.setAttribute('id', id)
    card.setAttribute('title', id)

    return card
}

export default ContainerCard