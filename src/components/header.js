import Logo from './logo'
import logoSrc from '../assets/logo.png'
import Title from './title'

const Header = () => {
    const header = document.createElement('header')
    const logo = Logo(logoSrc, 'todo app', 'logo')
    const title = Title('todo', 'title')
    header.classList.add('header')
    header.append(logo, title)
    
    return header
}

export default Header