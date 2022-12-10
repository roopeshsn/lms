import React, { useEffect, useState } from "react"
import { BooksContainer } from "./BooksContainer"
import { bookData } from "../books"
import { useParams } from "react-router-dom"
import { DashboardContent } from "./DashboardContent"

export const FilterByCategory = () => {
  const [filteredDataByCategory, setFilteredDataByCategory] = useState([])
  const { category } = useParams()
  const formatCategory = (category) => {
    return category.replaceAll(" ", "-").toLowerCase()
  }
  const newCategoryData = bookData
    .map((book) => {
      return { ...book, category: formatCategory(book.category) }
    })
    .filter((book) => book.category == category)

  useEffect(() => {
    setFilteredDataByCategory(newCategoryData)
  }, [category])

  return (
    <DashboardContent>
      <BooksContainer books={filteredDataByCategory} />
    </DashboardContent>
  )
}
