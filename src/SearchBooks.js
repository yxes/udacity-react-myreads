import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookCase from './BookCase'

class SearchBooks extends Component {
  state = {
    search_books: [],
    query: '',
    shelves: this.props.shelves.concat(['notShelved'])
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.performSearch()
  }

  performSearch = (query) => {
    this.setState({ 
      query: query.trim(),
      search_books: []
    })

    if (!query) return

    // initialize our books with a shelf of 'notShelved' - this is adjusted in `BookCase`
    BooksAPI.search(query, 20).then( (books) => (
      this.setState( (state) => ({
        search_books: books.map( (book) => { book.shelf = 'notShelved'; return book } )
      }))
    ))
  }

  // Bookmark search urls using /search?query=React for instance
  componentDidMount() {
    const params = new URLSearchParams(location.search)
    if (params.get('query')) this.performSearch(params.get('query'))
  }
 
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
               NOTES: The search from BooksAPI is limited to a particular set of search terms.
               You can find these search terms here:
               https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

               However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
               you don't find a specific author or title. Every search is limited by search terms.
            */}
            <form onSubmit={(event) => event.preventDefault()}>
              <input
	        name="query" 
	        type="text" 
		placeholder="Search by title or author"
		value={this.state.query}
	        onChange={(event) => this.performSearch(event.target.value)}/>
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <BookCase
	    search_books={this.state.search_books} 
	    shelves={this.state.shelves}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
