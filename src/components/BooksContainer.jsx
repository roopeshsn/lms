import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Book } from "./Book"
import { bookData } from "../books"
import { useEffect } from "react"
import { Pagination } from "./Pagination"

export const BooksContainer = ({ category = "All Genre", books }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [resultsBasedOnFilter, setResultsBasedOnFilter] = useState([])

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  // Getting authors from the search query
  const authorsFromUrl = searchParams.getAll("author")
  const genre = searchParams.get("genre")
  const searchText = searchParams.get("search")

  useEffect(() => {
    // No filtering
    if (category === "All Genre") {
      setResultsBasedOnFilter(bookData)
    }

    // Filter based on search
    if (searchText != null) {
      if (searchText === "") {
        return
      }
      const resultsBasedOnSearchText = bookData.filter((book) =>
        book.title.toLowerCase().includes(searchText)
      )
      setResultsBasedOnFilter(resultsBasedOnSearchText)
    }

    // Filter based on category
    if (genre != null) {
      const resultsBasedOnCategory = bookData.filter(
        (book) => book.to === genre
      )
      setResultsBasedOnFilter(resultsBasedOnCategory)
    }

    // Filter based on author
    if (authorsFromUrl.length > 0) {
      const formattedAuthors = authorsFromUrl.map((author) => {
        return author
          .replaceAll("-", " ")
          .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
      })
      const resultsBasedOnAuthors = []
      for (let i = 0; i < formattedAuthors.length; i++) {
        for (let j = 0; j < bookData.length; j++) {
          if (formattedAuthors[i] === bookData[j].author) {
            resultsBasedOnAuthors.push(bookData[j])
          }
        }
      }
      setResultsBasedOnFilter(resultsBasedOnAuthors)
    }

    // Filter based on publication date
  }, [searchText, genre, authorsFromUrl.length])

  // To render category at the top of the page when switching to categories
  const formattedCategory = category.replaceAll("-", " ")
  const finalCategory = formattedCategory.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  )

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = resultsBasedOnFilter.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl md:text-2xl font-medium">{finalCategory}</h1>
      {resultsBasedOnFilter.length < 1 && (
        <div>
          <p className="mt-4 text-md text-gray-500">No results found!</p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 mt-4">
        {currentItems.map((book) => {
          return (
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              author={book.author}
              src={book.src}
            />
          )
        })}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={resultsBasedOnFilter.length}
        paginate={paginate}
      />
    </div>
  )
}
