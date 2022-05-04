import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux';
import { CLICK } from './redux/types/actionTypes';

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

export default App
