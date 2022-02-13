const ContainerTypeItem = (item) => {
    const itemEl = document.createElement('div')
    itemEl.innerHTML = `<p>${item}</p>`
    itemEl.classList.add('containerTypeItem')
    itemEl.setAttribute('id', item)
    itemEl.addEventListener('dblclick', () => {
        const currentValue = itemEl.innerHTML
        itemEl.contentEditable = 'true'
        itemEl.focus()
        itemEl.addEventListener('blur', () => {
            itemEl.contentEditable = 'false'
            if (itemEl.innerHTML !== currentValue) {
                console.log('todo: updateContainerTypeTitle')
            }
        })
    })

    return itemEl
}

export default ContainerTypeItem