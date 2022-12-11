import React from "react"
import { BooksContainer } from "./BooksContainer"
import { bookData } from "../books"
import { DashboardContent } from "./DashboardContent"
import { useSearchParams } from "react-router-dom"

export const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let category = searchParams.get("genre")
  if (category == null) {
    category = "All Genre"
  }
  return (
    <DashboardContent>
      <BooksContainer category={category} books={bookData} />
    </DashboardContent>
  )
}
