import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KioskMain from "./components/kioskmain"
import Menu from "./components/menu"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KioskMain />}>
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
