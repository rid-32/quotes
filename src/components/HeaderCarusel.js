import React, { Component} from 'react';
import PropTypes from 'prop-types';

// Styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../less/header-carousel.less';

// Components
// import { Image, Button } from 'semantic-ui-react';
// Carousel
import { Carousel } from 'react-responsive-carousel';
import { Container } from 'semantic-ui-react';

// Images
import bg1 from '../img/header-bg-image.png';
import bg2 from '../img/header-bg-image2.jpg';
import bg3 from '../img/header-bg-image3.jpg';

class HeaderCarusel extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <Carousel showStatus={false} showThumbs={false} emulateTouch={true}>
        <div>
          <img src={bg1} alt="img" />
          <div className="legend head-carousel-content">
            <Container>
              <h1 className="carousel-header">Smile</h1>
              <div className="carousel-main">it costs you nothing</div>
            </Container>
          </div>
        </div>
        <div>
          <img src={bg2} alt="img" />
          <div className="legend head-carousel-content">
            <Container>
              <h1 className="carousel-header">Smile</h1>
              <div className="carousel-main">it costs you nothing</div>
            </Container>
          </div>
        </div>
        <div>
          <img src={bg3} alt="img" />
          <div className="legend head-carousel-content">
            <Container>
              <h1 className="carousel-header">Smile</h1>
              <div className="carousel-main">it costs you nothing</div>
            </Container>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default HeaderCarusel;
