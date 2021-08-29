import React from 'react'
import styled from 'styled-components';
import Title from './SectionTitle'

const StyledWrapper = styled.section`
  width:100%;
  background-color: #fff;
  padding:.3rem 0;
  .cp{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:.4rem;
    @media screen and (max-width: 360px) {
        gap: 0;
        flex-direction: column;
    }
  }
`;
export default function Welcome() {
  return (
    <StyledWrapper>
      <Title title="欢迎参加" />
    </StyledWrapper>
  )
}
