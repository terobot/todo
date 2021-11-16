import './style.css'
import Header from './components/header'

const App = () => {
    const pageContainer = document.createElement('div')
    pageContainer.append(Header())
    document.body.appendChild(pageContainer)
}

export default App
