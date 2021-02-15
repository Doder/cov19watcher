import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDayOneAllStatus } from '../../actions';

import StatsTable from '../StatsTable';

import './App.css';

function App() {
  const status = useSelector(state => state.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDayOneAllStatus('montenegro'));
  }, []);

  return (
    <div className="App">
      <h1>Montenegro Covid19 Stats</h1>
      <div className="table-container">
        <StatsTable stats={status.allStatus} />
      </div>
    </div>
  );
}

export default App;