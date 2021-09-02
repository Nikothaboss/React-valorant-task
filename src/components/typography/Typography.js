import styled from "styled-components";

export const MainHeader = styled.h1 `
    font-size: 40px;
    color: ${props => (props.black ? "black" : "white")};
`

export const SubHeader = styled.h2 `
    font-size: 24px;
    color: white;
`

export const Paragraph = styled.p `
    font-size: 16px;
    color: ${props => (props.black ? "black" : "white")} ;
`