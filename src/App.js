import React, {useState} from 'react';
import axios from 'axios';

import DisplayQuote from './components/DisplayQuote';
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const getQuote= () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then(data => {
      setQuote(data[0])
    })  
  };
  return (
  <div className="App">
  <DisplayQuote quote={quote} />
  <button type="button" onClick={getQuote}>Get Simpson Quote</button>
</div>
);
};

export default App;