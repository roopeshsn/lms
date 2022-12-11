import React from "react"
import { useSearchParams } from "react-router-dom"
import { Book } from "./Book"

export const BooksContainer = ({ category = "All Genre", books }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const author = searchParams.get("author")
  const formattedCategory = category.replaceAll("-", " ")
  const finalCategory = formattedCategory.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  )
  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl md:text-2xl font-medium">{finalCategory}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 mt-4">
        {books.map((book) => {
          return (
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              src={book.src}
            />
          )
        })}
      </div>
    </div>
  )
}
