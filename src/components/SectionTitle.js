import React from 'react'
import styled from 'styled-components';
import TitleImage from '../assets/imgs/title.bg.png'
const StyledTitle = styled.h2`
z-index: 999;
    width: 100%;
    text-align: center;
    font-size: .3rem;
    margin:.4rem 0;
    color:#ff4545;
    font-weight: 800;
    &:after{
        content: "";
        display: block;
        background: url(${TitleImage});
        background-size: 30%;
        background-repeat: no-repeat;
        background-position: center;
        height: .4rem;
        width: 100%;
        margin-top: .1rem;
    }
`;
export default function SectionTitle({ title = "" }) {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    )
}
