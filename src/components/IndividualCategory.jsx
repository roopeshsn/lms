import React from "react"
import { Link } from "react-router-dom"

export const IndividualCategory = ({ id, category, to }) => {
  return (
    <div key={id}>
      <Link to={`/books?genre=${to}`} className="text-sm text-gray-900 mt-1">
        {category}
      </Link>
    </div>
  )
}
