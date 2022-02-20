import logoSrc from '../assets/logo.png'
import Handler from '../utils/handlers'
import HomeView from './homeView'
import Title from './title'
import Logo from './logo'

const Header = () => {
    const header = document.createElement('header')
    const logo = Logo(logoSrc, 'todo', 'logo', 'logo')
    const title = Title('todo', 'title', 'title')
    title.addEventListener('click', () => Handler.openView(HomeView()))
    logo.addEventListener('click', () => Handler.openView(HomeView()))
    header.classList.add('header')
    header.append(logo, title)
    header.setAttribute('id', 'header')
    
    return header
}

export default Header