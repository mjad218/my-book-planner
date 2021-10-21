import React , {Component} from 'react'
import Book from './book'
class ListBooks extends Component {

    render() {
        return (
            <ol className="books-grid">
               {this.props.books.map((book) => {
                    return <li key={book.id} >
                        <Book updateBooks={this.props.updateBooks} book={book} /> 
                    </li>
               }) }
            </ol>
        )
    }
}

export default ListBooks 