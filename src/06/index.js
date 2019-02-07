import React, { Component } from 'react';
import { Transition } from 'react-spring';
import './styles.css';

const menuItems = [
  'Home',
  'Profile',
  'Order History',
  'Sign out'
];

class App extends Component {
  state = {
    menuOpen: false
  };

  handleBtnClick = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.handleBtnClick}>Menu</button>
        <Transition
          unique
          reset
          items={this.state.menuOpen}
          from={{

            height: 0,
            overflowY: 'hidden'
          }}
          enter={{

            height: 'auto',

          }}
          leave={{

            height: 0,

          }}
        >
          {item =>
            item &&
            (props => (
              <div style={props} className="menu">
                {menuItems.map(menuItem => (
                  <div className="menu-item">{menuItem}</div>
                ))}
              </div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
