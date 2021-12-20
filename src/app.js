import './style.css'
import Header from './components/header'
import SidePanel from './components/sidePanel'
import MainContent from './components/mainContent'

const App = () => {
    const mainContainer = document.createElement('div')
    mainContainer.append(SidePanel(), MainContent())
    mainContainer.classList.add('mainContainer')
    document.body.append(Header(), mainContainer)
}

export default App
