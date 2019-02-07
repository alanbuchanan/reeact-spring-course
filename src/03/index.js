import React from 'react';
import { Spring, config } from 'react-spring';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h2 className="title">New Customer offer</h2>
      <div className="offer">40% off</div>
      <Spring
        delay={500}
        config={config.wobbly}
        from={{
          transform: 'translateY(20%) scale(0)',
          transformOrigin: 'center center',
          position: 'relative'
        }}
        to={{ transform: 'translateY(0%) scale(1)' }}
      >
        {props => (
          <button style={props}>
            Shop Now
          </button>
        )}
      </Spring>
    </div>
  );
}

export default App;
