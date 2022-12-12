import React from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { categories } from "../categories"
import { MobileIndividualCategory } from "./MobileIndividualCategory"

export const MobileMultiMenu = () => {
  const [searchText, setSearchText] = useState("")
  const [categoryDrawer, setCategoryDrawer] = useState(false)
  const [setSearchParams] = useSearchParams()
  const handleAll = (e) => {
    setSearchParams({})
  }
  const handleSort = (e) => {}
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchText(e.target.searchInput.value.trim().toLowerCase())
    setSearchParams({
      search: searchText,
    })
  }
  const handleCategory = (e) => {
    setCategoryDrawer(true)
  }
  return (
    <div className="block md:hidden px-2 py-4">
      <div className="flex flex-col gap-4">
        <div>
          <form onSubmit={handleSearch} className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="searchInput"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 py-2"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-amber-400 rounded-lg border border-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAll}
            className="text-md border-2 border-gray-300 border-solid px-4 py-1 rounded-3xl"
          >
            All
          </button>
          <button
            onClick={handleSort}
            className="text-md border-2 border-gray-300 border-solid px-2 py-1 rounded-3xl"
          >
            Sort By
          </button>
          <button
            className="text-md rounded-3xl border-2 border-gray-300 border-solid px-2 py-1"
            onClick={handleCategory}
          >
            Category
          </button>
        </div>
      </div>
      {categoryDrawer && (
        <div
          id="drawer-bottom-example"
          className="fixed bottom-0 z-50 w-full px-2 pt-2 pb-8 bg-white"
          tabIndex="-1"
          aria-labelledby="drawer-bottom-label"
        >
          <h5
            id="drawer-bottom-label"
            className="inline-flex items-center mb-4 text-xl"
          >
            Filters
          </h5>
          <button
            type="button"
            data-drawer-dismiss="drawer-bottom-example"
            aria-controls="drawer-bottom-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
            onClick={() => setCategoryDrawer(!categoryDrawer)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          {categories.map((category) => {
            return (
              <MobileIndividualCategory
                id={category.id}
                category={category.category}
                to={category.to}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
