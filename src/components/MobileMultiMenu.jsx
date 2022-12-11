import React from "react"

export const MobileMultiMenu = () => {
  const handleSort = (e) => {}
  return (
    <div className="block md:hidden px-2 py-4">
      <div className="flex gap-2">
        <button
          onClick={handleSort}
          className="border-2 border-gray-300 border-solid px-2 py-1 rounded-3xl"
        >
          Sort By
        </button>
        <button className="rounded-3xl border-2 border-gray-300 border-solid px-2 py-1">
          Category
        </button>
      </div>
    </div>
  )
}
