import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

////////////////////////////////////////////////////


////////////////////////////////////////////////////

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
window.scrollTo(0, 9999);
serviceWorker.unregister();

