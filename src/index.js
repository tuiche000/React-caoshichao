import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './page/App'

ReactDOM.render(<AppContainer>
  <App />
</AppContainer>, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./message_board', () => {
    const HotLoad = require('./message_board').default
    render(<AppContainer>
      <App />
    </AppContainer>, document.getElementById('root'))
  });
}
