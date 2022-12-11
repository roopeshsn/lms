import React, { useState } from "react"
import { Checkbox } from "./Checkbox"
import { bookData } from "../books"
import { categories } from "../categories"
import { IndividualCategory } from "./IndividualCategory"
import { Link, useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const Sidebar = () => {
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)
  const [filteredDataByAuthor, setFilteredDataByAuthor] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [authors, setAuthors] = useState([])
  const [searchText, setSearchText] = useState("")
  const authorsFromUrl = searchParams.getAll("author")

  useEffect(() => {
    setAuthors(authorsFromUrl)
  }, [checkedOne, checkedTwo])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchText(e.target.searchInput.value.trim().toLowerCase())
    setSearchParams({
      search: searchText,
    })
  }

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

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo)
    if (checkedTwo) {
      setSearchParams({
        author: [...searchParams.getAll("author")],
      })
    } else {
      setSearchParams({
        author: [...searchParams.getAll("author"), "robin-sharma"],
      })
    }
  }

  const handleChangeThree = () => {
    setCheckedThree(!checkedThree)
  }

  const handleDate = (e) => {
    // setDate(e.target.value)
    setSearchParams({
      date: e.target.value,
    })
  }

  return (
    <div className="bg-white min-h-screen hidden md:block p-4">
      <h1 className="text-2xl font-medium">
        <Link to={"/books"}>Filter</Link>
      </h1>
      <div className="mt-4">
        <form onSubmit={handleSearch} class="flex items-center">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <input
              type="text"
              id="searchInput"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 py-2"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
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
          <input type="date" onChange={handleDate} />
        </div>
      </div>
    </div>
  )
}
