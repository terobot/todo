import './style.css'
import Header from './components/header'
import SidePanel from './components/sidePanel'
import Main from './components/mainPanel'
//import Product from './components/productPanel'

const App = () => {
    document.body.append(Header(), SidePanel(), Main())
}

export default App
