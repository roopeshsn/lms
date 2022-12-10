import React from "react"
import { BooksContainer } from "./BooksContainer"
import { bookData } from "../books"
import { DashboardContent } from "./DashboardContent"

export const Dashboard = () => {
  return (
    <DashboardContent>
      <BooksContainer books={bookData} />
    </DashboardContent>
  )
}
