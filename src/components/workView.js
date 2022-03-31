const WorkView = (work) => {
    const workView = document.createElement('div')
    workView.classList.add('workView')
    workView.setAttribute('id', 'workView')
    work.map(item => {
        const workItem = document.createElement('div')
        const title = document.createElement('div')
        const status = document.createElement('div')
        const output = document.createElement('div')
        workItem.classList.add('workItem')
        workItem.setAttribute('id', 'workItem' + item.title)
        workItem.append(title, status, output)
        workView.append(workItem)
    })

    return workView
}

export default WorkView