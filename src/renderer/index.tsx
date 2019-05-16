import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import './style.scss';

ReactDOM.render(
    <div className={`red`}>
        <h4>Welcome to React, Electron and Typescript</h4>
    </div>,
    document.getElementById('app')
);