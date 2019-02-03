import React from 'react';
import { Spring } from 'react-spring';
import { easeBounceOut } from 'd3-ease';
import './styles.css';

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

const svgConfig = { easing: easeBounceOut, duration: 2500 };

const Wheel = ({ stroke }) => (
  <svg viewBox="0 0 36 36" class="wheel" width="100">
    <path className="circle-bg" d={circlePath} />
    <path
      className="circle"
      strokeDasharray={`${stroke}, 100`}
      d={circlePath}
    />
    <text x="18" y="20.35" class="percentage">
      {Math.round(stroke)}%
    </text>
  </svg>
);

function App() {
  return (
    <div className="app">
      <h2>Pace</h2>
      <Spring
        from={{ stroke: 0 }}
        to={{ stroke: 54 }}
        config={svgConfig}
      >
        {style => <Wheel stroke={style.stroke} />}
      </Spring>
      <h2>Stamina</h2>
      <Spring
        from={{ stroke: 0 }}
        to={{ stroke: 30 }}
        config={svgConfig}
      >
        {style => <Wheel stroke={style.stroke} />}
      </Spring>
      <h2>Shooting</h2>
      <Spring
        from={{ stroke: 0 }}
        to={{ stroke: 90 }}
        config={svgConfig}
      >
        {style => <Wheel stroke={style.stroke} />}
      </Spring>
    </div>
  );
}

export default App;
