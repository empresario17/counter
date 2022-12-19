import React, { useState } from 'react';
import Quote from '../Quote.json';

const QuoteBox = () => {

    const anotherQuote = Math.floor(Math.random() * Quote.length); //de esta manera recorro todas las citas del json
 
    const [index, setIndex] = useState(0)

    const changeQuotes = () => {
        setIndex(anotherQuote);
    }
    const colors = ["#845EC2", "#D65DB1", "#FF6F91","#FF9671","#FFC75F","#F9F871" ] 
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColorIndex]}`;

      
    return (
        <div className= 'card title'>
            <h1><i class="fa-solid fa-quote-left"></i>{" "} {Quote[index].quote}{" "}</h1> 

            <h2>Author: {Quote[index].author}{" "}
            <i class="fa-solid fa-quote-right"></i>
            </h2>

            <div className='button'>
                <h2>Change Quotes</h2>
                <button onClick={changeQuotes}><i class="fa-solid fa-forward"></i></button>
            </div>
            
        </div>
    );
};

export default QuoteBox;