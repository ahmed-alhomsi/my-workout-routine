import styled from "styled-components"
import Card from "../components/Card"

function DayTwo() {
  return (
    <StyledDiv>

      <Card src="./workout exercises/second day/db bentover rows.jpg" alt="bentover rows" numberOfSets="4 X 10" />
      <Card src="./workout exercises/second day/dumbells to foot while leg stationary.jpg" alt="dumbells to foot while leg stationary" numberOfSets="4 X 10" />
      <Card src="./workout exercises/second day/raise the dumbell to you.jpg" alt="raise the dumbell to you" numberOfSets="4 X 10" />
      <Card src="./workout exercises/second day/train wrist.jpg" alt="train wrist" numberOfSets="4 X 30" />

    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: #845EC2;
  color: #FEF6FF;
  display: flex;
  padding: 5em;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;

  div {
    background-color: #FEF6FF;
    border: solid 1px #FEF6FF;
    text-align: center;
  }

  .card {
    transition: all ease-in-out 200ms;
    /* color: #FEF6FF; */
    color: #845EC2;
  }

  .card:hover {
    cursor: pointer;
    transform: translateY(-5%);
    transition: all ease-in-out 200ms;
  }
`

export default DayTwo