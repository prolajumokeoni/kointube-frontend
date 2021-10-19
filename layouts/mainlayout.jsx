import React from "react"
import GuessBar from "../components/appbar/guess_bar"

export const MainLayout = ({ children }) => {
  return (
    <div>
      <GuessBar />
      {children}
    </div>
  )
}
