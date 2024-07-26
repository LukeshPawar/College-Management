import React from "react"

import Styles from "./Home.module.scss"
import Header from "../../components/homepage/header/Header"
import Footer from "../../components/homepage/footer/Footer"

const HomePage = () => {
  return (
    <div>
      <Header isLogin="false" name="User" />
      <Footer />
    </div>
  )
}

export default HomePage
