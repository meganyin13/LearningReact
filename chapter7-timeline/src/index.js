import React from 'react';
import ReactDOM from 'react-dom';
import TimelineReact from "./TimelineReact";
import historicDatesForSkiing from "./data";

ReactDOM.render(<TimelineReact name="History of Skiing" data={historicDatesForSkiing}/>,
    document.getElementById('root'));
