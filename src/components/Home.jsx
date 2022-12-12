import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Footer } from "./Footer"
import { categories } from "../categories"
import { HomeCategory } from "./HomeCategory"

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4">
        <header className="mb-16 md:mb-40">
          <nav className="hidden md:block px-2 py-6">
            <div className="flex justify-between">
              <div className="inline-block text-xl font-semibold">LMS</div>
              <div>
                <Link
                  className="mx-2 font-medium md:text-lg bg-black text-white px-4 py-2"
                  to={`/books`}
                >
                  View All Books
                </Link>
              </div>
            </div>
          </nav>
          <div className="text-left mt-16 md:mt-44">
            <h1 className="text-4xl md:text-6xl font-medium">
              To succeed you must read!
            </h1>
            <p className="text-2xl md:text-3xl  mt-3">
              Not sure what to read next? Explore our catalog of curated books.
            </p>
            <button
              onClick={() => navigate("/books")}
              className="mt-6 bg-black text-white px-4 py-2 text-lg md:text-xl font-medium hover:shadow-lg hover:-translate-y-2 transition-transform"
            >
              View All Books
            </button>
          </div>
        </header>
        <section className="mb-20 pt-8">
          <h1 className="text-3xl md:text-4xl font-medium">Explore by Genre</h1>
          <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 mt-4 gap-4 md:gap-8 md:my-8">
            <div
              key={1}
              className="bg-amber-200 text-xl md:text-2xl font-medium p-4 md:p-6"
            >
              <Link to={`/books`}>View All</Link>
            </div>
            {categories.map((category) => {
              return (
                <HomeCategory
                  id={category.id}
                  to={category.to}
                  category={category.category}
                />
              )
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
