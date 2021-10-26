import React from 'react'

const DisplayQuote = ({quoteList}) => {
return (

    quoteList &&
    <div className="Display-quote">
        <img src="{quoteList.image}" alt="{quoteList.character}"/>
        <p>{quoteList.character}</p>
        <figcaption>
        <p>{quoteList.quote}</p>
        </figcaption>
    </div>
)
}

export default DisplayQuote;