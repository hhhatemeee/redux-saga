import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './redux';
import { CLICK } from './redux/types/actionTypes';

import './App.css';

const App: React.FC = () => {
  const store = useSelector((store: RootState) => store);
  const dispatch = useDispatch();

  console.log(store);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: CLICK })}>q</button>
      qq
    </div>
  )
}

export default App;
