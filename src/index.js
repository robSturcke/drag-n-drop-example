import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppDragDrop from './AppDragDrop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppDragDrop />, document.getElementById('root'));
registerServiceWorker();
