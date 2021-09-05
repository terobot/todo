import './style.css'

const text = () => {
    const element = document.createElement('div')
    element.innerHTML = 'todo'
    element.classList.add('punanen')
    return element
}

document.body.appendChild(text())