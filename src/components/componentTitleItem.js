const ComponentTitleItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `${item}`
    itemEl.classList.add('componentTitle')
    itemEl.setAttribute('id', item)

    return itemEl
}

export default ComponentTitleItem