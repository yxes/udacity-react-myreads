import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookCase extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    search_books: PropTypes.array
  }

  state = {
    books: [],
    shelves: this.props.shelves
  }

  moveBook = (book, shelf) => {
    book.shelf = shelf;

    // find the book - remove it and add our new one back
    this.setState( (prevState) => ({
      books: prevState.books.filter(known_book => known_book.id !== book.id)
                        .concat(book)
    }))

    BooksAPI.update(book, shelf)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState((prevState) => {
        return {
	  books,
	  // new shelves are appended to the current 'known' list of shelves
	  shelves: prevState.shelves.concat(
	    Array.from(
	      new Set( books.map(book => book.shelf)
		            .filter(shelf => !prevState.shelves.includes(shelf))
	      )
	    )
	  )
	}
      })
    })
  }

  render() {
    // searching books? if we know the shelf it's on update the book
    const books = this.props.search_books ? 
      this.props.search_books.map( book => { 
        const known_books = this.state.books.filter(current_book => current_book.id === book.id)
        if (known_books.length > 0) book.shelf = known_books[0].shelf
        return book
      } )
      : this.state.books // otherwise return all known books

    const moveBook = this.moveBook

    return (
      <div> 
      { this.state.shelves.filter(
          shelf => books.filter(book => book.shelf === shelf).length > 0)
          .map( shelf => (
            <div className="bookshelf" key={shelf}>
	      <BookShelf
                shelf={shelf}
                books={(shelf) ? books.filter(book => book.shelf === shelf) : books}
                onMoveBook={moveBook}
                shelves={this.state.shelves}
              />
            </div>
        ))
      }
      </div>
    )
  }
}

export default BookCase
