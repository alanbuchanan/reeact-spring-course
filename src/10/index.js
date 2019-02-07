import React from 'react';
import { Transition, config } from 'react-spring';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles.css';

const AppRouter = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/s-pellegrino">
                  S. Pellegrino
                </Link>
              </li>
              <li>
                <Link to="/perrier/">Perrier</Link>
              </li>
              <li>
                <Link to="/badoit/">Badoit</Link>
              </li>
            </ul>
          </nav>
          <Transition
            keys={location.pathname}
            from={{
              opacity: 0,
              transform: 'translateY(-50%) scale(0.5)',
              position: 'absolute'
            }}
            enter={{
              opacity: 1,
              transform: 'translateY(0%) scale(1)'
            }}
            leave={{
              opacity: 0,
              transform: 'translateY(100%) scale(0.5)'
            }}
          >
            {item => style => (
              <Switch location={location}>
                <Route
                  path="/s-pellegrino"
                  exact
                  render={props => (
                    <Page {...props} style={style}>
                      <p>
                        S.Pellegrino is an Italian natural
                        mineral water brand, owned by the
                        company Sanpellegrino S.p.A., whose
                        production plant is located in San
                        Pellegrino Terme in the Province of
                        Bergamo, Lombardy, Italy.
                        Sanpellegrino S.p.A. has been part
                        of Swiss company Nestlé since 1997
                        and its products are exported to
                        most countries in Europe, the
                        Americas, Australasia and the Middle
                        East, as well as in Asia in Japan,
                        Taiwan and Hong Kong.
                      </p>
                    </Page>
                  )}
                />
                <Route
                  path="/perrier"
                  exact
                  render={props => (
                    <Page {...props} style={style}>
                      <p>
                        Perrier /ˈpɛri.eɪ/ (French
                        pronunciation: ​[pɛʁ.je]) is a
                        French brand of natural bottled
                        mineral water captured at the source
                        in Vergèze, located in the Gard
                        département. Perrier is best known
                        for its naturally occurring
                        carbonation, distinctive green
                        bottle, and higher levels of
                        carbonation than its peers.
                      </p>
                    </Page>
                  )}
                />
                <Route
                  path="/badoit"
                  exact
                  render={props => (
                    <Page {...props} style={style}>
                      <p>
                        Badoit is a brand of mineral water
                        obtained from natural sources at
                        Saint-Galmier, France.[1] The water
                        is naturally carbonated, on its
                        journey through granite rocks and
                        subterranean gas deposits.
                      </p>
                    </Page>
                  )}
                />
                <Redirect exact to="/s-pellegrino" />
              </Switch>
            )}
          </Transition>
        </div>
      )}
    />
  </Router>
);

const Page = ({ style, children }) => (
  <div style={style}>{children}</div>
);

export default AppRouter;
