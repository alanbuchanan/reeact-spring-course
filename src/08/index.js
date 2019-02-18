import React, { Component } from 'react';
import {
  Keyframes,
  config,
  animated
} from 'react-spring';
import items from './items';
import StarRatingComponent from 'react-star-rating-component';
import './styles.css';

const HIDE_DELAY = 100;

const ListItem = Keyframes.Spring({
  show: {
    delay: 0,
    height: 'auto'
  },
  hide: {
    delay: HIDE_DELAY * 3,
    height: 70
  }
});

const ListItemContent = Keyframes.Trail({
  show: {
    delay: HIDE_DELAY,
    opacity: 1,
    transform: 'translate3d(0px,0,0)'
  },
  hide: {
    opacity: 0,
    transform: 'translate3d(-40px,0,0)'
  }
});

class App extends Component {
  state = {
    activeName: undefined
  };

  componentDidMount() {
    this.setState({
      activeName: 'Ipsum'
    });
  }

  handleItemClick = name => {
    this.setState(prevState => ({
      activeName:
        prevState.activeName === name ? '' : name
    }));
  };

  render() {
    const stuff = item => [
      <div>{item.text}</div>,
      <div className="category">
        Category: {item.category}
      </div>,
      <StarRatingComponent
        starCount={5}
        value={item.rating}
      />
    ];
    return (
      <div className="app">
        <ul>
          {items.map(item => (
            <ListItem
              native
              key={item.title}
              state={
                this.state.activeName ===
                item.title
                  ? 'show'
                  : 'hide'
              }
            >
              {props => (
                <animated.li
                  style={props}
                  onClick={() =>
                    this.handleItemClick(
                      item.title
                    )
                  }
                >
                  <div className="top-container">
                    <h2>{item.title}</h2>
                    <div>
                      {this.state.activeName ===
                      item.title
                        ? '–'
                        : '+'}
                    </div>
                  </div>

                  <ListItemContent
                    native
                    items={stuff(item)}
                    state={
                      this.state.activeName ===
                      item.title
                        ? 'show'
                        : 'hide'
                    }
                    keys={stuff(item).map(
                      (_, i) => i
                    )}
                    config={config.stiff}
                  >
                    {newItem => newProps => (
                      <animated.div
                        style={newProps}
                        className="list-text"
                      >
                        {newItem}
                      </animated.div>
                    )}
                  </ListItemContent>
                </animated.li>
              )}
            </ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
