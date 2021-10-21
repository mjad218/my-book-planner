import React , {Component} from 'react'
import Shelf from '../components/shelf'
import {Link} from 'react-router-dom'
class Home extends Component{
    shelves = ["currentlyReading" , "wantToRead" , "read"]; 
    
    render() {
        return (
            <div className="list-books">
                <div className="list-books-content">
                <div>
                    {   
                        this.shelves.map( (shelf) => ( <Shelf key={shelf} updateBooks={this.props.updateBooks} shelf={shelf} books={this.props.books.filter( (book) => (book.shelf === shelf) ) } />)) 
                    }
                </div>
                </div>
                <div className="open-search">   
                    <Link to="/search" > 
                    <button>Add a book</button>
                    </Link>
                </div>
        
            </div>

        ) 

    }
}

export default Home 