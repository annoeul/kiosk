import React from "react"
import Logo from "../../common/logo/index"
import { Container } from "@material-ui/core"
import { Outlet } from "react-router-dom"
import Menu from "../menu"

function KioskMain() {
  return (
    <Container>
      <Logo size={40} />
      <Outlet />
    </Container>
  )
}

export default KioskMain
