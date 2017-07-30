import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ProductForm from './components/ProductForm'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const Home = () => (
  <div>
    <h2>Welecome To Flora</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu mode="horizontal">
            <Menu.Item key="product">
              <Link to="/product">Product Detail</Link>
            </Menu.Item>
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ProductForm}/>
        </div>
      </Router>
    )
  }
}

export default App;
