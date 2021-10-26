import axios from 'axios';
import React, {useState} from 'react';

import './App.css';
import DisplayQuote from './components/DisplayQuote.jsx'

function App() {
  const [quoteList, setQuoteList] = useState();

  const GetQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((res) => res.data)
    .then((data) => {
      setQuoteList(data)
    }
  }
  return (
    <div>
    <DisplayQuote quoteList={quoteList}/>
    <button type ="button" onClick="{GetQuote}">get random quote</button>
    </div>
  );
}

export default App;