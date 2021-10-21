import React , {Component} from 'react'
import ListBooks from './list-books'
class Shelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                {this.props.shelf === "currentlyReading" && "Currently Reading"}
                {this.props.shelf === "read" && "Read"}
                {this.props.shelf === "wantToRead" && "Want to Read"}
                </h2>
                <div className="bookshelf-books">
                <ListBooks updateBooks={this.props.updateBooks} books={this.props.books} shelf={this.props.shelf}/> 
                </div>
          </div>
        )
    }
}

export default Shelf 