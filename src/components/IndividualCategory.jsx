import React from "react"
import { NavLink } from "react-router-dom"

export const IndividualCategory = ({ id, category, to }) => {
  return (
    <div key={id}>
      <NavLink
        to={`/books?genre=${to}`}
        className={({ isActive }) => (isActive ? `font-normal` : undefined)}
      >
        {category}
      </NavLink>
    </div>
  )
}
