import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import FilePage from './pages/FilePage';

function App() {
  const [selectFile, setSelectFile] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="App">
      {error && <div className='errorReques'>{error}</div>}
      {!selectFile ? 
        <HomePage onFile={setSelectFile} onError={setError} />
        : <FilePage file={selectFile} onFile={setSelectFile} onError={setError} />}
    </div>
  );
}

export default App;
