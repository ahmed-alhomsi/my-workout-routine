import styled from "styled-components"
import Card from "../components/Card"

function DayOne() {
  return (
    <StyledDiv>

      <Card src="./workout exercises/first day/narrow pushup.jpg" alt="narrow pushup.jpg" numberOfSets="4 X 15" />
      <Card src="./workout exercises/first day/wide pushup.jpg" alt="wide pushup.jpg" numberOfSets="4 X 6" />
      <Card src="./workout exercises/first day/lift while lying down.jpg" alt="lift while lying down" numberOfSets="4 X 10" />
      <Card src="./workout exercises/first day/lift while arm is stationary.jpg" alt="lift arm while stationary" numberOfSets="5 X 20" />
      <Card src="./workout exercises/first day/lift dem legs.jpg" alt="lift leg" numberOfSets="3 X 20" />
      <Card src="./workout exercises/first day/bicycle.png" alt="bicycle" numberOfSets="3 X 20" />
      <Card src="./workout exercises/first day/beta device.jpg" alt="press beta" numberOfSets="4 X 10" />

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

export default DayOne