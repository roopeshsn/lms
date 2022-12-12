import React, { useState } from "react"
import { Checkbox } from "./Checkbox"
import { categories } from "../categories"
import { IndividualCategory } from "./IndividualCategory"
import { Link, useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const Sidebar = () => {
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [authors, setAuthors] = useState([])
  const [searchText, setSearchText] = useState("")
  const authorsFromUrl = searchParams.getAll("author")

  // Will set state of authors
  useEffect(() => {
    setAuthors(authorsFromUrl)
  }, [checkedOne, checkedTwo])

  // Search query based on search box
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchText(e.target.searchInput.value.trim().toLowerCase())
    setSearchParams({
      search: searchText,
    })
  }

  // Checkbox1
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne)
    if (checkedOne) {
      setSearchParams({ author: [] })
    } else {
      setSearchParams({
        author: [...searchParams.getAll("author"), "ankur-warikoo"],
      })
    }
  }

  // Checkbox2
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo)
    if (checkedTwo) {
      setSearchParams({ author: [] })
    } else {
      setSearchParams({
        author: [...searchParams.getAll("author"), "robin-sharma"],
      })
    }
  }

  // Checkbox3
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree)
    if (checkedThree) {
      setSearchParams({ author: [] })
    } else {
      setSearchParams({
        author: [...searchParams.getAll("author"), "james-clear"],
      })
    }
  }

  // Search query based on date
  const handleDate = (e) => {
    setSearchParams({
      date: e.target.value,
    })
  }

  return (
    <div className="bg-white min-h-screen hidden md:block p-4 border-r-2 border-solid border-gray-300">
      <h1 className="text-2xl font-medium">
        <Link to={"/books"}>Filter</Link>
      </h1>
      <div className="mt-4">
        <form onSubmit={handleSearch} className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="searchInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 py-2"
              placeholder="Search"
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
      <div className="mt-4">
        <h2 className="text-xl font-medium">By Category</h2>
        <div className="mt-2">
          {categories.map((category) => {
            return (
              <IndividualCategory
                id={category.id}
                category={category.category}
                to={category.to}
              />
            )
          })}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-medium">By Author</h2>
        <div className="mt-2">
          <Checkbox
            id={1}
            label="Ankur Warikoo"
            value={checkedOne}
            onChange={handleChangeOne}
          />
          <Checkbox
            id={2}
            label="Robin Sharma"
            value={checkedTwo}
            onChange={handleChangeTwo}
          />
          <Checkbox
            id={3}
            label="James Clear"
            value={checkedThree}
            onChange={handleChangeThree}
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-medium">By Date</h2>
        <div className="mt-2">
          <input
            className="text-sm text-gray-900"
            type="date"
            onChange={handleDate}
          />
        </div>
      </div>
    </div>
  )
}
