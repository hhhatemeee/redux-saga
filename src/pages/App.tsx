import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../redux/index';

import './App.css';

const App: React.FC = () => {
  const store = useSelector((store: RootState) => store);

  console.log(store);
  return (
    <div className="App">
      <button onClick={() => { }}>q</button>
      <div>
        <Link to='/post'>go post</Link>
      </div>
    </div >
  )
}

export default App;
