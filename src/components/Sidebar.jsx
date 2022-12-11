import React, { useState } from "react"
import { Checkbox } from "./Checkbox"
import { bookData } from "../books"
import { categories } from "../categories"
import { IndividualCategory } from "./IndividualCategory"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const Sidebar = () => {
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)
  const [filteredDataByAuthor, setFilteredDataByAuthor] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [date, setDate] = useState(null)
  const [authors, setAuthors] = useState([])

  const authorsFromUrl = searchParams.getAll("author")
  useEffect(() => {
    setAuthors(authorsFromUrl)
  }, [checkedOne, checkedTwo])

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne)
    if (checkedOne) {
      setSearchParams({ author: [] })
    } else {
      setSearchParams({
        author: [...searchParams.getAll("author"), "ankur-warikoo"],
      })
    }
    // const filtered = bookData.filter((book) => book.author == "Ankur Warikoo")
    // setFilteredDataByAuthor([...filteredDataByAuthor, ...filtered])
    // console.log(filtered)
    // console.log(filteredDataByAuthor)
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
    // const filtered = bookData.filter((book) => book.author == "Robin Sharma")
    // setFilteredDataByAuthor([...filteredDataByAuthor, ...filtered])
    // console.log(filtered)
    // console.log(filteredDataByAuthor)
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
      <h1 className="text-2xl font-medium">Filter</h1>
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
