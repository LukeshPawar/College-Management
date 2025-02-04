import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from "./pages/home/Home.page.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
