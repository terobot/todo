const ContainerCard = (id) => {
    const card = document.createElement('div')
    card.classList.add('containerCard')
    card.setAttribute('id', id)

    return card
}

export default ContainerCard