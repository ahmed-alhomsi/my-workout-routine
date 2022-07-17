import styled from "styled-components"
import Card from "../components/Card"
import dbBentoverRows from '../workout exercises/second day/db bentover rows.jpg'
import dumbellsToFoot from '../workout exercises/second day/dumbells to foot while leg stationary.jpg'
import raiseDumbell from '../workout exercises/second day/raise the dumbell to you.jpg'
import trainWrist from '../workout exercises/second day/train wrist.jpg'

function DayTwo() {
  return (
    <StyledDiv>

      <Card src={dbBentoverRows} alt="bentover rows" numberOfSets="4 X 10" />
      <Card src={dumbellsToFoot} alt="dumbells to foot while leg stationary" numberOfSets="4 X 10" />
      <Card src={raiseDumbell} alt="raise the dumbell to you" numberOfSets="4 X 10" />
      <Card src={trainWrist} alt="train wrist" numberOfSets="4 X 30" />

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