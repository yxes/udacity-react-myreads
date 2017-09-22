import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSelect extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  render() {
    const book = this.props.book
    const onMoveBook = this.props.onMoveBook

    return (
      <select value={ book.shelf } 
              onChange={ (event) => onMoveBook(book, event.target.value) }>
        <option disabled>Move to...</option>
        { this.props.shelves.map( shelf => (
            <option key={shelf} value={ shelf }>{ 
	      /* shelfName ==> Shelf Name */
	      shelf.replace(/([A-Z])/g,' $1')
		   .replace(/^./, str => str.toUpperCase()) 
	    }</option>
          ))
        }
        <option value="none">none</option>
      </select>
    )
  }
}

class BookShelf extends Component {
  static propTypes = {
    onMoveBook: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array,
    shelf: PropTypes.string
  }

  render() {
    const shelf = this.props.shelf
    // convert camelCase to Regular Form
    const shelf_name = shelf ? shelf.replace(/([A-Z])/g,' $1')
	                            .replace(/^./, str => str.toUpperCase())
                             : ""
    const books = this.props.books || []
    const shelves = this.props.shelves
    const onMoveBook = this.props.onMoveBook

    return (
      <div>
        <h2 className="bookshelf-title">{shelf_name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          { books.map( (book, index) => (
            <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
	               style={
		         { width: 128, 
			   height: 193, 
			   backgroundImage: `url(${book.imageLinks.smallThumbnail})` 
			 }
		       }>
		  </div>
                  <div className="book-shelf-changer">
                    <ShelfSelect
		      book={book}
                      shelves={shelves}
		      onMoveBook={onMoveBook}
		      shelf={shelf}/>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
		{/* 'dangerouslySetInnerHTML' to place one author per line */}
                <div
		  className="book-authors"
		  dangerouslySetInnerHTML={{ __html: book.authors.join("<br/>") }}></div>
              </div>
            </li>
          )) }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
