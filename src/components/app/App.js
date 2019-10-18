import React from 'react';
import './App.css';
import Bar from '../charts/bar/Bar';
import Line from '../charts/line/line';

const App = () => (
  <div>
      <div className="App">
          <Bar />
          <Line/>
      </div>
  </div>
)

export default App
