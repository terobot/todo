import Logo from './logo'
import logo from '../assets/logo.png'

const Header = () => {
    const header = document.createElement('header')
    const title = document.createElement('div')
    title.classList.add('title')
    title.innerText = 'ToDo'
    header.classList.add('header')
    header.append(Logo(logo), title)
    
    return header
}

export default Header