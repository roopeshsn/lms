import React from "react"

export const Book = ({ id, title, author, src }) => {
  return (
    <div className="flex flex-row gap-4 bg-yellow-200" key={id}>
      <div className="mb-2">
        <div className="w-40 h-50">
          <img src={src} alt={title} />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium">{title}</h1>
        <h2>{author}</h2>
      </div>
    </div>
  )
}
