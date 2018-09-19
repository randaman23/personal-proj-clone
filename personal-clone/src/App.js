import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Cart from './component/Cart/Cart'
import Category from './component/Category/Category'
import Home from './component/Home/Home'
import Item from './component/Item/Item'
import Login from './component/Login/Login'
import Store from './component/Store/Store'



class App extends Component {
  render() {
    return (
      <div >
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/store" exact component={Store}/>
            <Route path="/store/category/:name" exact component={Category}/>
            <Route path="/store/item/:id" component={Item}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
