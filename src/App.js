import React , {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './pages/home' 
import Search from './pages/search' 
import Header from './components/header' 

import {BrowserRouter , Route  } from 'react-router-dom'
class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then (  (books) => {
      this.setState({books : books});
    }
    )
  }
  
  updateBooks = () => {
    BooksAPI.getAll()
    .then (  (books) => {
      this.setState({books : books});
    }
    )
  }
  
  render() {
    return (
      <BrowserRouter> 
        <div className="app"> 
          <Route exact path="/"> 
            <Header />
              <Home books={this.state.books} updateBooks={this.updateBooks}/>
          </Route>
          <Route exact path="/search"> 
              <Search updateBooks={this.updateBooks} />
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
