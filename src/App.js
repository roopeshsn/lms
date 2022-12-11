import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BooksContainer } from "./components/BooksContainer"
import { Dashboard } from "./components/Dashboard"
import { FilterByCategory } from "./components/FilterByCategory"
import { Home } from "./components/Home"
import { NoMatch } from "./components/NoMatch"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Dashboard />}></Route>
          {/* <Route path="/books/:category" element={<FilterByCategory />}></Route> */}
          {/* <Route path="*" element={<NoMatch />}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
