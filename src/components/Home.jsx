import React from "react"
import { Link, useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <header className="mb-40">
        <nav className="hidden md:block px-2 py-4">
          <div className="flex justify-between">
            <div className="inline-block text-xl font-semibold">LMS</div>
            <div>
              <Link
                className="mx-2 font-medium md:text-lg px-4 py-2 hover:bg-amber-200"
                to={`/about`}
              >
                About LMS
              </Link>
              <Link
                className="mx-2 font-medium md:text-lg bg-black text-white px-4 py-2"
                to={`/books`}
              >
                View All Books
              </Link>
            </div>
          </div>
        </nav>
        <div className="text-left mt-44">
          <h1 className="text-4xl md:text-6xl font-medium">
            To succeed you must read!
          </h1>
          <p className="text-2xl md:text-3xl  mt-3">
            Not sure what to read next? Explore our catalog of curated books.
          </p>
          <button
            onClick={() => navigate("/books")}
            className="mt-6 bg-black text-white px-4 py-2 text-lg md:text-xl font-medium"
          >
            View All Books
          </button>
        </div>
      </header>
      <section>
        <h1 className="text-3xl md:text-4xl font-medium">Explore by Genre</h1>
        <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-4 my-8">
          <div className="bg-amber-200 text-2xl font-medium p-4">
            <Link to={`/books?genre=personal-development`}>
              Personal Development
            </Link>
          </div>
          <div className="bg-amber-200 text-2xl font-medium p-4">
            <Link to={`/books?genre=business-and-economics`}>
              Business and Economics
            </Link>
          </div>
          <div className="bg-amber-200 text-2xl font-medium p-4">
            <Link to={`/books?genre=action-and-adventure`}>
              Action and Adventure
            </Link>
          </div>
          <div className="bg-amber-200 text-2xl font-medium p-4">
            <Link to={`/books?genre=fiction`}>Fiction</Link>
          </div>
          <div className="bg-amber-200 text-2xl font-medium p-4">
            <Link to={`/books?genre=religion-and-sprituality`}>
              Religion and Sprituality
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
