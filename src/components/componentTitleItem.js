const ComponentTitleItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `<p>${item}</p>`
    itemEl.classList.add('componentTitle')
    itemEl.setAttribute('id', item)
    itemEl.setAttribute('title', item)

    return itemEl
}

export default ComponentTitleItem