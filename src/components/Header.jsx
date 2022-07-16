import Quote from "./Quote"
import styled from "styled-components"

function Header() {
  return (
    <StyledHeader>
        <h1>The Workout Routine App</h1>
        <Quote />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    text-align: center;
    background-color: #845EC2;
    color: #FEF6FF;
`;

export default Header