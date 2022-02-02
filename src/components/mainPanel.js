import HomeView from "./homeView"

const MainPanel = () => {
    const mainPanel = document.createElement('div')
    mainPanel.classList.add('mainPanel')
    mainPanel.setAttribute('id', 'mainPanel')
    mainPanel.append(HomeView())

    return mainPanel
}

export default MainPanel