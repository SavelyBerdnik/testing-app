import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import FilePage from './pages/FilePage';

function App() {
  console.log(JSON.parse(localStorage.getItem('fileData')))
  const [content, setContent] = useState(JSON.parse(localStorage.getItem('fileData')) || [])
  const [error, setError] = useState('')

  return (
    <div className="App">
      {error && <div className='errorReques'>{error}</div>}
      {!content.length ? 
        <HomePage onError={setError} />
        : <FilePage file={content} onError={setError} />}
    </div>
  );
}

export default App;
