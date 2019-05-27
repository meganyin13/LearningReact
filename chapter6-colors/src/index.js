import React from 'react';
import ReactDOM from 'react-dom';
import AddColorFormStatelessFunctional from './AddColorFormStatelessFunctional';

ReactDOM.render(
    <AddColorFormStatelessFunctional onNewColor={(title, color) => {
        console.log(`TODO: add new ${title} and ${color} to the list`);
        console.log(`TODO: render UI with new Color`)
    }}/>,
    document.getElementById('root')
);
