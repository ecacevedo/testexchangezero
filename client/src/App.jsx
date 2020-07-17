import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './App.css';
import { Route } from 'react-router-dom'



import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import { getCategories } from './services/categories';

import { allItems, postItem } from './services/items'
import ShowCategories from './ShowCategories';
import ShowItems from './ShowItems'
import CreateItem from './CreateItem';



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

        <Route path='/' render={() => (
          <ShowItems
          items ={this.state.items}
          />
        )} />
        <br/>
        <Route path='/' render={() => (
          
          <CreateItem
            
            handleItemCreate={this.handleItemCreate}
          
          />
          
        )}/>
        
        <Footer/>
       
        </>
  )
  }
}
