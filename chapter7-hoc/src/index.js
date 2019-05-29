import React from 'react';
import ReactDOM from 'react-dom';
// import { RandomMeUsers } from "./PeopleListStatelessFunctional";
// import { CountryDropDown } from "./CountryNames";
// import { HiddenMessage } from "./ShowHideMessage";
import { PopupButton } from "./MenuButton";


// ReactDOM.render(<CountryDropDown selected="Uruguay" />, document.getElementById('root'));
// ReactDOM.render(<HiddenMessage />, document.getElementById('root'));
ReactDOM.render(
    <PopupButton hidden={true} txt="toggle popup" >
        <h1>Hidden Content</h1>
        <p>This content will start off hidden</p>
    </PopupButton>,
    document.getElementById('root')
);
