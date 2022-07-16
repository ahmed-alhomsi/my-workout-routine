import { Route, Routes } from "react-router-dom"
import DayOne from "./DayOne"
import DayTwo from "./DayTwo"
import DayThree from "./DayThree"

function Pages() {
  return (
    <Routes>
        <Route path="/first-day" element={<DayOne />} />
        <Route path="/second-day" element={<DayTwo />} />
        <Route path="/third-day" element={<DayThree />} />
    </Routes>
  )
}

export default Pages