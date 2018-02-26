import React, { Component} from 'react';
import PropTypes from 'prop-types';

// Components
import { Responsive, Grid, Header, Menu, Button, Icon, Transition, Container } from 'semantic-ui-react';

// Styles
import '../less/navbar.less';

class PopupMenu extends Component {

  state = {
    styles: {
      position: 'absolute',
      left: '0px',
      top: '100%',
      height: 'auto',
      width: '100%',
      overflow: 'hidden',
      padding: '0px',
    },
    visible: false,
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visible) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  render() {
    const { children } = this.props;
    const { styles, visible } = this.state;

    return (
      <Transition visible={visible} animation='slide down' duration={300}>
        <div style={styles}>
          { children }
        </div>
      </Transition>
    );
  }
}

class Navbar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    visible: false,
  }

  toggleVisibility = () => this.setState({
    visible: !this.state.visible,
  })

  render() {
    const { visible } = this.state
    const items = [
      { key: 'home', name: 'Home' },
      { key: 'dashboard', name: 'Dashboard' },
      { key: 'login', name: 'Log In' }
    ];
    const compItems = items.map(item => ({ ...item, active: false, className: 'comp-menu-item' }));
    const mobileItems = items.map(item => ({ ...item, onClick: this.toggleVisibility, className: 'mobile-menu-item' }));

    // Если нужна абсолютная навигация, то нужно поменять fixed на absolute
    //
    // Если нужна обычная навигация в потоке, то нужно удалить div и Container и ВСЁ!!!!!
    return (
      <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', zIndex: '2000' }} className="navbar-main-container">
        <Container>
          <Grid style={{ position: 'relative' }}>
            <Grid.Column width={6}>
              <Responsive as="div" minWidth={600}>
                <Header as="h2" className="header-logo">Quotes</Header>
              </Responsive>
              <Responsive as="div" maxWidth={599}>
                <Header as="h2" className="header-logo">Q</Header>
              </Responsive>
            </Grid.Column>
            <Responsive as={Grid.Column} width={10} minWidth={768}>
              <Menu items={compItems} floated="right" secondary />
            </Responsive>
            <Responsive as={Grid.Column} width={10} maxWidth={767} textAlign="right">
              <Button icon onClick={this.toggleVisibility} basic active={visible} id="burgerButton">
                <Icon name="sidebar" id="burgerButtonIcon" />
              </Button>
            </Responsive>
            <Responsive as={PopupMenu} maxWidth={767} visible={visible}>
              <Menu fluid vertical items={mobileItems} inverted />
            </Responsive>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Navbar;
