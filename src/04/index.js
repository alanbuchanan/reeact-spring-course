import React, { Component } from 'react';
import { Transition } from 'react-spring';
import cx from 'classnames';
import './styles.css';

const NavBtn = ({ direction, action }) => (
  <div
    className={cx('navigate', `navigate-${direction}`)}
    onClick={action}
  >
    <span role="img" aria-label="left">
      {direction === 'left' ? '⏪' : '⏩'}
    </span>
  </div>
);

class App extends Component {
  state = {
    items: [
      {
        altText: 'Google Chrome logo',
        imgLink:
          'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg',
        text:
          'Google Chrome (commonly known simply as Chrome) is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, and was later ported to Linux, macOS, iOS, and Android. The browser is also the main component of Chrome OS, where it serves as the platform for web apps.'
      },
      {
        altText: 'Firefox logo',
        imgLink:
          'https://upload.wikimedia.org/wikipedia/commons/6/67/Firefox_Logo%2C_2017.svg',
        text:
          'Mozilla Firefox (or simply Firefox) is a free and open-source web browser developed by The Mozilla Foundation and its subsidiary, Mozilla Corporation. Firefox is available for Windows, macOS, Linux, BSD, illumos and Solaris operating systems. Its sibling, Firefox for Android, is also available.'
      },
      {
        altText: 'Safari logo',
        imgLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2000px-Safari_browser_logo.svg.png',
        text:
          "Safari is a graphical web browser developed by Apple, based on the WebKit engine. First released on desktop in 2003 with Mac OS X Panther, a mobile version has been bundled with iOS devices since the iPhone's introduction in 2007. Safari is the default browser on Apple devices. A Windows version was available from 2007 to 2012."
      }
    ],
    activeIndex: 0,
    prevIndex: 0,
    swipeDirection: ''
  };

  increment = () => {
    this.setState(prevState => ({
      swipeDirection: 'right',
      activeIndex:
        prevState.activeIndex === prevState.items.length - 1
          ? 0
          : prevState.activeIndex + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      swipeDirection: 'left',
      activeIndex:
        prevState.activeIndex === 0
          ? prevState.items.length - 1
          : prevState.activeIndex - 1
    }));
  };

  render() {
    const {
      items,
      activeIndex,
      swipeDirection
    } = this.state;
    return (
      <div className="app">
        <NavBtn direction="left" action={this.decrement} />
        <Transition
          from={{
            transform: `translate3d(${
              swipeDirection === 'right' ? '' : '-'
              }100%,0,0)`,
            opacity: 0
          }}
          enter={{
            transform: 'translate3d(0px,0,0)',
            opacity: 1
          }}
          leave={{
            transform: `translate3d(${
              swipeDirection === 'right' ? '-' : ''
              }100%,0,0)`,
            opacity: 0
          }}
          items={activeIndex}
        >
          {idx => props => (
            <div className="img-text-container" style={props}>
              <img
                width={200}
                src={items[idx].imgLink}
                alt={items[idx].altText}
              />
              <p>{items[idx].text}</p>
            </div>
          )}
        </Transition>
        <NavBtn direction="right" action={this.increment} />
      </div>
    );
  }
}

export default App;
