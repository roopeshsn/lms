import React from "react"
import { useSearchParams } from "react-router-dom"
import { Book } from "./Book"

export const BooksContainer = ({ books }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const author = searchParams.get("author")
  return (
    <div className="max-w-6xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
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
