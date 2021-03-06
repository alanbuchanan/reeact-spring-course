import React, { Component } from 'react';
import { Keyframes } from 'react-spring';
import delay from 'delay';
import ReactPlaceholder from 'react-placeholder';
import './styles.css';

const items = [
  {
    key: 1,
    content: (
      <ReactPlaceholder type="media" rows={2} />
    )
  },
  {
    key: 2,
    content: 'Home'
  },
  {
    key: 3,
    content: 'Favourites'
  },
  {
    key: 4,
    content: 'Sign out'
  }
];

const Menu = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'translateX(0%)'
    });
  },
  out: async next => {
    await delay(700);
    await next({
      transform: 'translateX(-100%)'
    });
  }
});

const MenuItems = Keyframes.Trail({
  in: async next => {
    await delay(600);
    await next({
      opacity: 1,
      transform: 'translateX(0px)'
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-40px)'
    });
  }
});

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
        <button onClick={this.handleBtnClick}>
          ☰
        </button>

        <Menu
          unique
          state={
            this.state.menuOpen ? 'in' : 'out'
          }
        >
          {props => (
            <nav style={props}>
              <ul>
                <MenuItems
                  keys={item => item.key}
                  items={items}
                  state={
                    this.state.menuOpen
                      ? 'in'
                      : 'out'
                  }
                  reverse={!this.state.menuOpen}
                >
                  {trailitem => trailprops => (
                    <li style={trailprops}>
                      {trailitem.content}
                    </li>
                  )}
                </MenuItems>
              </ul>
            </nav>
          )}
        </Menu>
      </div>
    );
  }
}

export default App;
