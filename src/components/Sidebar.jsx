import React, { useState } from "react"
import { Checkbox } from "./Checkbox"
import { bookData } from "../books"
import { categories } from "../categories"
import { IndividualCategory } from "./IndividualCategory"
import { useSearchParams } from "react-router-dom"

export const Sidebar = () => {
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)
  const [filteredDataByAuthor, setFilteredDataByAuthor] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [date, setDate] = useState(null)

  const author = searchParams.get("author")

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne)
    if (checkedOne) {
      setSearchParams({})
    } else {
      setSearchParams({ author: "ankur-warikoo" })
    }
    // const filtered = bookData.filter((book) => book.author == "Ankur Warikoo")
    // setFilteredDataByAuthor([...filteredDataByAuthor, ...filtered])
    // console.log(filtered)
    // console.log(filteredDataByAuthor)
  }

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo)
    if (checkedTwo) {
      setSearchParams({})
    } else {
      setSearchParams({ author: "robin-sharma" })
    }
    // const filtered = bookData.filter((book) => book.author == "Robin Sharma")
    // setFilteredDataByAuthor([...filteredDataByAuthor, ...filtered])
    // console.log(filtered)
    // console.log(filteredDataByAuthor)
  }

  const handleChangeThree = () => {
    setCheckedThree(!checkedThree)
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
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
    </div>
  )
}
