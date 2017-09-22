import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import BookCase from './BookCase'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  render() {
    const shelves = ['currentlyReading','wantToRead','read']

    return (
      <div className="app">

        <Route path="/search" render={() => (
          <SearchBooks shelves={shelves}/>
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
	        <BookCase shelves={shelves}/>
	    </div>
            <div className="open-search">
	      <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
