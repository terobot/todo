import logoSrc from '../assets/logo.png'

const Logo = (src, alt, id, elClass) => {
    const logo = document.createElement('img')
    logo.setAttribute('src', src)
    logo.setAttribute('alt', alt)
    logo.setAttribute('id', id)
    logo.classList.add(elClass)

    return logo
}

const Title = (text, id, elClass) => {
    const title = document.createElement('div')
    title.classList.add(elClass)
    title.innerText = text
    title.setAttribute('id', id)
    
    return title
}

const Header = () => {
    const header = document.createElement('header')
    const logo = Logo(logoSrc, 'todo app', 'logo', 'logo')
    const title = Title('todo', 'title', 'title')
    header.classList.add('header')
    header.append(logo, title)
    header.setAttribute('id', 'header')
    
    return header
}

export default Header