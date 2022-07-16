import styled from "styled-components"
import Card from "../components/Card"

function DayThree() {
  return (
    <StyledDiv>

      <Card src="./workout exercises/third day/2 shoulder exercises.jpg" alt="shoulder training" numberOfSets="4 X 15 / 4 X 15" />
      <Card src="./workout exercises/third day/lift the dumbell to T-pose.jpg" alt="shoulder training" numberOfSets="4 X 10" />
      <Card src="./workout exercises/third day/leg exercises.jpg" alt="shoulder training" numberOfSets="4 X 15 / 4 X 15" />
      <Card src="./workout exercises/third day/glute bridge.jpg" alt="shoulder training" numberOfSets="4 X 20" />

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

export default DayThree