import { useEffect, useState } from "react"
import styled from "styled-components"

function Quote() {

    const [quote, setQuote] = useState('');
    
    const getRandomNumber = (arrayLength) => {
        const randomNumber = Math.floor(Math.random() * arrayLength)
        return randomNumber;
    }

    const fetchQuotes = async () => {
        const data = await fetch('https://type.fit/api/quotes');
        const json = await data.json();
        setQuote(json[getRandomNumber(json.length)]);
    }

    useEffect(() => {
        fetchQuotes();
    }, [])

  return (
    <StyledQuote>
        <p>{quote.text}</p>
        <h4>{quote.author}</h4>
    </StyledQuote>
  )
}

const StyledQuote = styled.div`
    p {
        padding: 1.5em;
    }

    h4 {
        padding-top: 0em;
        padding: 1em;
    } 

    padding: 4em;
`;

export default Quote