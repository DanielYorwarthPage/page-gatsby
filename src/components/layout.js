import React from "react"
import Header from "./header"

const Layout = ({ children }) =>  (
  <div>
    <Header />
    <div className="container mx-auto">
      {children}
    </div>
  </div>
)


export default Layout
