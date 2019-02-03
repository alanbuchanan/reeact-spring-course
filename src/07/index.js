import React, { Fragment, Component } from 'react';
import cx from 'classnames';
import {
  Parallax,
  ParallaxLayer
} from 'react-spring/addons';
import './styles.css';

const textSpeed = 0.5;
const imageSpeed = 1;

const Page = ({
  idx,
  title,
  imgLink,
  imgDescription,
  description
}) => (
  <Fragment>
    <ParallaxLayer
      offset={idx}
      speed={0}
      className={cx('layer', `layer${idx}`)}
    />
    <ParallaxLayer
      offset={idx}
      speed={imageSpeed}
      className={cx('layerImage', `layerImage${idx}`)}
    >
      <img src={imgLink} alt={imgDescription} width={150} />
    </ParallaxLayer>
    <ParallaxLayer
      offset={idx}
      speed={textSpeed}
      className="layerContent"
      scrolling
    >
      {title && <h2>{title}</h2>}
      <p>{description}</p>
    </ParallaxLayer>
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Parallax pages={3}>
          <Page
            idx={0}
            title="Opal"
            imgLink="https://i.imgur.com/ude9e1u.jpg"
            imgDescription="Opal lying down"
            description="Opal is a fluffy cat. She spends most of her day lying
        around. She also likes nomming, cuddles, and chasing
        string."
          />
          <Page
            idx={1}
            imgLink="https://i.imgur.com/KfpNnyY.jpg"
            imgDescription="Opal being a loaf"
            description="Opal is a rescue cat. She's a dilute tortoiseshell and
              her tortitude is off the charts."
          />
          <Page
            idx={2}
            imgLink="https://imgur.com/oHjL7CG.jpg"
            imgDescription="Opal being soppy"
            description="Opal has a very happy home and loves her hoomans almost
              as much as they love her."
          />
        </Parallax>
      </div>
    );
  }
}

export default App;
