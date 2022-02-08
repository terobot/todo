import ProductItem from './productItem'
import List from './list'
import Service from '../utils/services'
import Button from './button'
import Form from './form'
import Title from './title'
import HomeView from './homeView'
import Handler from '../utils/handlers'

const SidePanel = () => { 
    const sidePanel = document.createElement('div')
    const productItems = Service.getProducts().map(x => ProductItem(x.id, x.title))
    const addProductButton = Button('+', 'addProduct', 'button', 'initial')
    const newProductForm = Form('newProduct', 'none', 'Product name')
    const submitButton = Button('Submit', 'submitProduct', 'submit', 'initial')
    const cancelButton = Button('Cancel', 'cancelProduct', 'button', 'initial')
    const productListId = 'productList'
    const productList = List(productItems, productListId)
    const productListTitle = Title('Products', 'productList', 'title')
    productListTitle.addEventListener('click', () => Handler.openView(HomeView()))
    cancelButton.addEventListener('click', () => Handler.cancelFormInPlace(addProductButton, newProductForm))
    newProductForm.append(submitButton, cancelButton)
    newProductForm.addEventListener('submit', (e) => Handler.submitNewProductForm(e, newProductForm, addProductButton, productListId))
    addProductButton.addEventListener('click', () => Handler.openFormInPlace(addProductButton, newProductForm))
    sidePanel.classList.add('sidePanel')
    sidePanel.setAttribute('id', 'sidePanel')
    sidePanel.append(
        productListTitle,
        productList,
        addProductButton,
        newProductForm
    )

    return sidePanel
}

export default SidePanel