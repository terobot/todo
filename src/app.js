import './style.css'
import Header from './components/header'
import SidePanel from './components/sidePanel'
import Main from './components/mainPanel'

const App = () => {
    document.body.append(Header(), SidePanel(), Main())
}

export default App
