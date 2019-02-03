import React, { Component } from 'react';
import { Transition } from 'react-spring';
import uuid from 'uuid';
import casual from 'casual';
import times from 'lodash.times';
import './styles.css';

const data = times(4, () => ({
  key: uuid(),
  name: casual.populate('{{name_prefix}} {{last_name}}'),
  country: casual.country,
  description: casual.short_description
}));

class App extends Component {
  state = {
    items: data
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({
        items: [
          {
            key: uuid(),
            name: casual.populate(
              '{{name_prefix}} {{last_name}}'
            ),
            country: casual.country,
            description: casual.short_description
          },
          ...prevState.items.slice(0, -1)
        ]
      }));
      this.componentDidMount();
    }, 3000);
  }

  render() {
    return (
      <div className="app">
        <div className="cards">
          <Transition
            initial={null}
            items={this.state.items}
            keys={item => item.key}
            from={{
              transform:
                'translateY(-100%) scale(2) rotate(10deg)',
              height: 0,
              opacity: 0
            }}
            enter={{
              transform:
                'translateY(0%) scale(1) rotate(0deg)',
              height: 'auto',
              opacity: 1
            }}
            leave={{
              transform:
                'translateY(100%) scale(0) rotate(-10deg)',
              opacity: 0
            }}
          >
            {item => props => (
              <div style={props} className="card">
                <div className="header">
                  <div className="name">{item.name}</div>
                  <div className="country">
                    {item.country}
                  </div>
                </div>
                <blockquote className="description">
                  "{item.description}"
                </blockquote>
              </div>
            )}
          </Transition>
        </div>
      </div>
    );
  }
}

export default App;
