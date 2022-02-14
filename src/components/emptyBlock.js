const EmptyBlock = (item) => {
    const itemEl = document.createElement('div')
    itemEl.classList.add(item)
    itemEl.setAttribute('id', item)

    return itemEl
}

export default EmptyBlock