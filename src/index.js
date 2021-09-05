import './style.css'
import './public/favicon.png'

const text = () => {
    const element = document.createElement('div')
    element.innerHTML = 'todo'
    element.classList.add('punanen')
    return element
}

const favicon = () => {
    const icon = document.createElement('link')
    icon.setAttribute('rel', 'shortcut icon')
    icon.setAttribute('type', 'image/png')
    icon.setAttribute('href', '/public/favicon.png')
    return icon
}

document.body.appendChild(text())
document.head.appendChild(favicon())