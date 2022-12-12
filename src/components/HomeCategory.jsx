import React from "react"
import { Link } from "react-router-dom"

export const HomeCategory = ({ id, category, to }) => {
  return (
    <div
      key={id}
      className="bg-amber-200 text-xl md:text-2xl font-medium p-4 md:p-6"
    >
      <Link to={`/books?genre=${to}`}>{category}</Link>
    </div>
  )
}
