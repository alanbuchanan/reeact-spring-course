import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { Trail, config } from 'react-spring';
import times from 'lodash.times';
import './styles.css';

const items = times(5, i => ({
  key: i,
  component: <ReactPlaceholder type="media" rows={2} />
}));

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <Trail
            items={items}
            keys={item => item.key}
            from={{
              opacity: 0,
              transform: 'translateY(-50%)'
            }}
            to={{ opacity: 1, transform: 'translateY(0%)' }}
            config={config.wobbly}
          >
            {item => props => (
              <li style={props}>{item.component}</li>
            )}
          </Trail>
        </ul>
      </div>
    );
  }
}

export default App;
