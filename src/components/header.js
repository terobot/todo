import logoSrc from '../assets/logo.png'

const Logo = (src, alt, elClass) => {
    const logo = document.createElement('img')
    logo.setAttribute('src', src)
    logo.setAttribute('alt', alt)
    logo.classList.add(elClass)

    return logo
}

const Title = (text, elClass) => {
    const title = document.createElement('div')
    title.classList.add(elClass)
    title.innerText = text
    
    return title
}

const Header = () => {
    const header = document.createElement('header')
    const logo = Logo(logoSrc, 'todo app', 'logo')
    const title = Title('todo', 'title')
    header.classList.add('header')
    header.append(logo, title)
    
    return header
}

export default Header