import React, { useEffect, useState } from "react"
import { Grid, Paper, Typography, ButtonBase, Container } from "@material-ui/core"
import * as S from "./style"
import one from "../../data/one"

function Product({ name, img, price, description }) {
  return (
    <Container>
      <S.ProductWrapper>
        <S.ProductImg src="" />
      </S.ProductWrapper>
      <S.ProductName>{name}</S.ProductName>
      <p>{img}</p>
      <p>{description}</p>
      <p>{price}</p>
    </Container>
  )
}

export default Product
