import './style.css'
import Header from './components/header'
import SidePanel from './components/sidePanel'
import Product from './components/productPanel'

const App = () => {
    const mainContainer = document.createElement('div')
    mainContainer.append(SidePanel(), Product.ProductPanel())
    mainContainer.classList.add('mainContainer')
    document.body.append(Header(), mainContainer)
}

export default App
