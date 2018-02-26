import React from 'react';

// Components
import { Container, Header, Responsive } from 'semantic-ui-react';

// Styles
import '../less/template.less';

const FreeTemplate = () => (
  <Container fluid textAlign="center" className="freetemplate-container">
    <Responsive as="div" maxWidth={767}>
      <Header as="h2" className="thin-template-header">The most inclusive</Header>
      <Header as="h2" className="bold-template-header">Free PSD Template</Header>
    </Responsive>
    <Responsive as="div" minWidth={768}>
      <Header as="h1" className="thin-template-header">The most inclusive</Header>
      <Header as="h1" className="bold-template-header">Free PSD Template</Header>
    </Responsive>
  </Container>
);

export default FreeTemplate;
