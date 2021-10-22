import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListBooks from '../components/list-books'
class Search extends Component {
    state = {
        query : '', 
        books: []
    }
    componentDidMount() {
        // console.log(this.state);
    }
    handleSearch = (query) => {
        this.setState({query}) 
        this.state.query !== '' && 
        BooksAPI.search(this.state.query)
        .then( (books) => {
            books.map( (book) => {
                this.props.books.forEach( ( myBook) => {
                    if (book.id === myBook.id) {
                        if ( book.title === "Pro React") {
                            //console.log(myBook); 
                            //console.log(book); 
                            //console.log(myBook.shelf); 
                        } 
                        book.shelf = myBook.shelf; 
                    } else {
                        !book.shelf && (book.shelf = "none");
                    }
                }) 
                return book; 
            }); 
            this.setState({books}) 
        }    
        ) 
    } 
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" > 
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={ (event) => this.handleSearch(event.target.value) } />
                    </div>
                </div>
                <div className="search-books-results">
                    {   <span style={{textAlign: "center" , display: "block"}}> 
                            {this.state.books.length > 0 && this.state.query !== '' && `Showing ${this.state.books.length} books for "${this.state.query}"` } 
                        </span> }
                    {   this.state.books.error === undefined && this.state.query !== ''
                        && <ListBooks updateBooks={this.props.updateBooks} books={this.state.books} />
                    }
                    {this.state.books.error && <span style={{textAlign: "center", display: "block"}}>No Books to Show</span>}
                    {this.state.query === '' && <span style={{textAlign: "center" , display: "block"}}>type something to search for</span>}
                </div>
            </div>
        )
    }
}

export default Search 