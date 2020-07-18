import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './App.css';
import { Route } from 'react-router-dom'



import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import { getCategories } from './services/categories';

import { allItems, postItem, putItem } from './services/items'
import ShowCategories from './ShowCategories';
import ShowItems from './ShowItems'
import CreateItem from './CreateItem';
import UpdateItem from './UpdateItem'



export default class App extends Component {
  state = {
    currentUser: null,
    categories: [],
    items:[]
  }

  

  componentDidMount() {
    this.handleVerify()
    this.fetchCategories()
    this.fetchItems()
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories })
  }

  fetchItems = async () => {
    const items = await allItems();
    this.setState({ items })
  }

  handleItemCreate = async (itemData) => {
    const newItem = await postItem(itemData);
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }))

  }

  handleItemUpdate = async (id, itemData) => {
    const newItem = await putItem(id, itemData);
    this.setState(prevState => ({
      items: prevState.items.map(item => item.id === parseInt(id) ? newItem : item)
    }))
  }

  handleItemDelete = async (id) => {
    await deleteItem(id);
    
  }

 

  handleSignup = async (userData) => {

    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogin = async (userData) => {

    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleVerify = async () => {

    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  handleLogout = async () => {

    this.setState({ currentUser: null})
    localStorage.removeItem('authToken')
    removeToken()
  }



  render() {
    return (
      <>
        <Header
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Route path='/categories' render={() => (
          <ShowCategories
          categories ={this.state.categories}
          />
        )} />

        <Route exact path='/items' render={() => (
          <ShowItems
          items ={this.state.items}
          />
        )} />
        <br/>
        <Route path='/items/new' render={(props) => (
          
          <CreateItem
            {...props}
            handleItemCreate={this.handleItemCreate}

          />
          
        )}/>
        <Route path='/items/:id/edit' render={(props) => {
          const { id } = props.match.params;
          const itemItem = this.state.items.find(item => item.id === parseInt(id));
          return <UpdateItem
            {...props}
            handleItemUpdate={this.handleItemUpdate}
            itemItem={itemItem}
            id={id}
          />
        }} />
        
        <Footer/>
       
        </>
  )
  }
}
