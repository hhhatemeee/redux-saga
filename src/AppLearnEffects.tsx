import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './redux/indexLearnEffects';
import { CLICK } from './redux/types/actionTypes';

import './App.css';
/*
  Файл для первоначальных примеров
  Все последующие файлы в навзании которых есть LearnEffects, явлются отработками из урока. (они все связанны)
  src: https://www.youtube.com/watch?v=ah5voE_SGjo&t=2382s
*/

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
