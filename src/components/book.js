import React , {Component} from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends Component {
    state = {
        shelf : '' 
    } 

    componentDidMount() {
        this.setState({ shelf : this.props.book.shelf});
    }
    changeShelf = (shelf) => {
        BooksAPI.update( this.props.book , shelf)
        .then( (re) => {
            this.props.updateBooks(); 
            console.log(re) 
        }) 
    }

    render () {
        let shelves = ["currentlyReading" , "wantToRead" , "read" , "none"];  
        console.log(this.props.book); 
        return (
            <div className="book" key={this.props.book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={ (e) => this.changeShelf(e.target.value) } value={this.state.shelf} >
                            <option value="move" disabled>Move to...</option>

                            {
                                shelves.map( (shelf) => {
                                    return <option key={shelf} value={shelf} > 
                                            {shelf === "currentlyReading" && "Currently Reading"} 
                                            {shelf === "wantToRead" && "Want to Read"} 
                                            {shelf === "read" && "Read"} 
                                            {shelf === "none" && "None"} 
                                    </option>
                                }) 
                            }
                        </select>
                    </div>
                </div>
                <div className="book-title">{ this.props.book.title && this.props.book.title}</div>
                <div className="book-authors">
                    { this.props.book.authors && this.props.book.authors.map( (author) => ( <span key={author}> {author} <br/> </span> )  )}
                </div>
            </div>
        ) 
     }
}

export default Book 