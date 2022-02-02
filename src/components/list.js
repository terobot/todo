const List = (items, id) => {
    const list = document.createElement('div')
    list.classList.add('list')
    list.setAttribute('id', id)
    items.map(x => list.append(x))
    
    return list
}

export default List