const ComponentTitleItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `<p>${item}</p>`
    itemEl.classList.add('componentTitle')
    itemEl.setAttribute('id', item)
    itemEl.setAttribute('title', item)
    itemEl.addEventListener('dblclick', () => {
        const currentValue = itemEl.innerHTML
        itemEl.contentEditable = 'true'
        itemEl.focus()
        itemEl.addEventListener('blur', () => {
            itemEl.contentEditable = 'false'
            if (itemEl.innerHTML !== currentValue) {
                console.log('todo: updateComponentTitle')
            }
        })
    })

    return itemEl
}

export default ComponentTitleItem