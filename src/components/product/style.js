import { styled } from "styled-components"

export const ProductWrapper = styled.div`
  display: flex;
`

export const ProductImg = styled.img`
  width: ${({ size }) => size}px;
`

export const ProductName = styled.h3`
  color: blue;
`
