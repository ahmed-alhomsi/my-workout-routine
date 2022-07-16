import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header";
import Pages from "./pages/Pages";
import { Link } from "react-router-dom"
import styled from "styled-components";
import './index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <StyledLinks>
          <Link className="shadow" to="/first-day">day one</Link>
          <Link className="shadow" to="/second-day">day two</Link>
          <Link className="shadow" to="/third-day">day three</Link>
        </StyledLinks>
        <Pages />
      </Router>
    </div>
  );
}

const StyledLinks = styled.div`
  text-align: center;
  background-color: #845EC2;
  color: #FEF6FF;
  padding: 2em;

  a {
    background-color: #FEF6FF;
    color: #845EC2;
    text-decoration: none;
    font-size: 1.5rem;
    padding: .5em;
    border-radius: 15px;
    margin: 1em;
  }
`;

export default App;