import React from "react"
import Logo from "../../common/logo/index"
import { Container } from "@material-ui/core"
import { Outlet } from "react-router-dom"
import Menu from "../menu"
import Category from "../category"

function KioskMain() {
  return (
    <Container style={{ maxWidth: "425px", backgroundColor: "grey" }}>
      <Logo size={40} />
      <Category />
      <Menu />
      {/* <Outlet /> */}
    </Container>
  )
}

export default KioskMain
