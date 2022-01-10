import './style.css'
import Header from './components/header'
import SidePanel from './components/sidePanel'
import Product from './components/productPanel'

const App = () => {
    document.body.append(Header(), SidePanel(), Product.ProductPanel())
}

export default App
