import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Book } from "./Book"
import { bookData } from "../books"
import { useEffect } from "react"

export const BooksContainer = ({ category = "All Genre", books }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [resultsBasedOnFilter, setResultsBasedOnFilter] = useState([])
  // const [authors, setAuthors] = useState([])
  const authorsFromUrl = searchParams.getAll("author")
  // console.log(authorsFromUrl)
  const genre = searchParams.get("genre")
  useEffect(() => {
    // No filtering
    if (category == "All Genre") {
      setResultsBasedOnFilter(bookData)
    }

    // Filter based on category
    if (genre != null) {
      const resultsBasedOnCategory = bookData.filter((book) => book.to == genre)
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
          if (formattedAuthors[i] == bookData[j].author) {
            resultsBasedOnAuthors.push(bookData[j])
          }
        }
      }
      setResultsBasedOnFilter(resultsBasedOnAuthors)
    }
  }, [genre, authorsFromUrl.length])

  // To render category at the top of the page when switching to categories
  const formattedCategory = category.replaceAll("-", " ")
  const finalCategory = formattedCategory.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  )
  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl md:text-2xl font-medium">{finalCategory}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 mt-4">
        {resultsBasedOnFilter.map((book) => {
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
    </div>
  )
}
