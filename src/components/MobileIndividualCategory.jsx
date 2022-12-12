import React from "react"
import { Link } from "react-router-dom"

export const MobileIndividualCategory = ({ id, category, to }) => {
  return (
    <div key={id} className="mt-2">
      <Link
        to={`/books?genre=${to}`}
        className="text-md text-gray-900 hover:underline"
        key={id}
      >
        {category}
      </Link>
    </div>
  )
}
