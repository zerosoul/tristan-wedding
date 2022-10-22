import React from 'react'
import styled from 'styled-components'
import TitleImage from '../assets/imgs/title.bg.png'
const StyledTitle = styled.h2`
  font-family: 'SP-F';
  font-weight: 800;
  z-index: 998;
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  margin: 0.4rem 0;
  color: #ff4545;
  font-weight: 800;
  &:after {
    content: '';
    display: block;
    background: url(${TitleImage});
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: center;
    height: 0.4rem;
    width: 100%;
    margin-top: 0.1rem;
  }
`
export default function SectionTitle({ title = '' }) {
  return <StyledTitle>{title}</StyledTitle>
}
