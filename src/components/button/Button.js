import styled from "styled-components";

export const Heading = styled.h2 `
    color: white;

`
const Heading2 = styled(Heading) `
    font-size: 30px;
    color: blue;
`
const Button = () => {
    return (
        <>
           <Heading>This is not html</Heading>
           <Heading2>This is also not html</Heading2>
        </>
    )
}

export default Button
