import React from 'react';

function DisplayQuote ({ quote }) {
  return (    
      <div className='quote'>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>
            <em>Character Name:</em> {quote.character}
          </li>
          <li> 
              <em>Character Quote:</em> {quote.quote}</li>
          <li>
            <em>Character direction:</em> {quote.characterDirection}
          </li>
        </ul>
      </div>
  );
}

export default DisplayQuote;