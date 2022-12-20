import React, { useState } from 'react';
import Quote from '../Quote.json';

const QuoteBox = () => {
const colors = ["#845EC2", "#D65DB1", "#FF6F91","#FF9671","#FFC75F","#F9F871" ] 
    
const anotherQuote = Math.floor(Math.random() * Quote.length); //de esta manera recorro todas las citas del json
 
    const [index, setIndex] = useState(0)

    const [color, setColor] = useState(0)

    const randomColorIndex = Math.floor(Math.random() * colors.length)

    const changeQuotes = () => {
        setIndex(anotherQuote);
        setColor(randomColorIndex);
    }
    
    document.body.style = `background: ${colors[color]}`;

      
    return (
        <div className= 'card title'>
            <h1 style={{color: `${colors[color]}`}}><i class="fa-solid fa-quote-left"></i>{" "} {Quote[index].quote}
            {" "}</h1> 

            <h2 style={{color: `${colors[color]}`}}>Author: {Quote[index].author}{" "}
            <i class="fa-solid fa-quote-right"></i>
            </h2>

            <div className='button'>
             <button onClick={changeQuotes}><i class="fa-solid fa-forward"></i></button>
            </div>
             
        </div>
    );
};

export default QuoteBox;