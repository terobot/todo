const ContainerView = (container) => {
    const containerView = document.createElement('div')
    const title = document.createElement('div')
    containerView.classList.add('containerView')
    containerView.setAttribute('id', container.title + 'View')
    containerView.setAttribute('title', container.title + 'View')
    title.innerHTML = `${container.title} view`
    containerView.append(title)

    return containerView
}

export default ContainerView