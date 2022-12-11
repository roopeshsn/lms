import React from "react"

export const Book = ({ id, title, category, author, src }) => {
  return (
    <div className="flex flex-row gap-4" key={id}>
      <div className="mb-2">
        <div className="w-40 h-50">
          <img src={src} alt={title} />
        </div>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
        <h2 className="text-lg md:text-xl">{author}</h2>
        <button className="text-xs px-2 py-1 rounded-xl bg-amber-300">
          {category}
        </button>
      </div>
    </div>
  )
}
