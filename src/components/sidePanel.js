import Service from '../utils/services'

const ProjectEL = (title) => {
    const projectEl = document.createElement('div')
    projectEl.innerHTML = `${title}`

    return projectEl
}

const SidePanel = () => {
    const sidePanel = document.createElement('div')
    const projects = document.createElement('div') 
    sidePanel.classList.add('sidePanel')
    projects.classList.add('projects')
    Service.getProducts().map(x => projects.appendChild(ProjectEL(x.title)))
    sidePanel.appendChild(projects)

    return sidePanel
}

export default SidePanel