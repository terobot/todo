import './style.css'
import Header from './components/header'
import SidePanel from './components/sidePanel'

const App = () => {
    const pageContainer = document.createElement('div')
    pageContainer.append(Header(), SidePanel())
    pageContainer.classList.add('pageContainer')
    document.body.appendChild(pageContainer)
}

export default App
