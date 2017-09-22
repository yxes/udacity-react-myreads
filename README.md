# udacity-react-myreads

_First project of the Udacity React Nanodegree_

Organize your reading Library into shelves with the following:

 - Currently Reading
 - Want To Read
 - Read

Perform searches against all your known books and move them
to appropriate shelves or remove them from your bookcase entirely.

## INSTALL

To fire this up right away:

 - `npm install`
 - `npm start`

If you experience errors when installing please see the 
[INSTALL.md](./INSTALL.md) file for any known issues.

## SEARCH TERMS

Search terms are limited by the API. The file 
[SEARCH_TERMS.md](./SEARCH_TERMS.md) contains a list of valid
terms.

### BOOKMARKING

You can bookmark your searches by formatting your url thus:

/search?query=KEYWORD

for instance `/search?query=React` will returns results as
if you had typed _React_ into the search bar.

## FILES

### BooksApp
- main application

##### BookShelf
- list of books on a given shelf

#### BookCase
- complete list of _shelves_ with books

#### SearchBooks
- search page with single _shelf_ of results

## AUTHOR

This is a fork of [myreads-starter](https://github.com/udacity/myreads-starter)
originally created by [Richard Kalehoff](https://github.com/richardkalehoff).

Additional functionality supplied by [Steve Wells](https://linkedin.com/in/sdwells)
