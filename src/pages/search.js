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
        console.log(this.state);

    }
    handleSearch = (query) => {
        this.setState({query}) 
        this.state.query !== '' && 
        BooksAPI.search(this.state.query)
        .then( (books) => {
            this.setState({books : books}) 
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
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={ (event) => this.handleSearch(event.target.value) } />
                
                    </div>
                </div>
                <div className="search-books-results">
                    {/* {JSON.stringify(this.state.query)} */}
                    {
                        this.state.books.error === undefined && this.state.query !== ''
                        &&
                        <ListBooks updateBooks={this.props.updateBooks} books={this.state.books} />
                    }
                    
                </div>
            </div>
        )
    }
}

export default Search 