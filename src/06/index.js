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
    menuOpen: true
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
            opacity: 0,
            height: 0,
            transform: 'translateY(-10%)'
          }}
          enter={{
            opacity: 1,
            height: 'auto',
            transform: 'translate(0%)'
          }}
          leave={{ opacity: 0 }}
        >
          {item =>
            item &&
            (props => (
              <div style={props} className="menu">
                {menuItems.map(menuItem => (
                  <div className="menuItem">{menuItem}</div>
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
