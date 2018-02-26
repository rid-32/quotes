import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'semantic-ui-css/semantic.min.css';
import './less/main.less';

// Components
import App from './components/App';

// Other
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
