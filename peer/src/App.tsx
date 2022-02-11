import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import DogImage from "host/DogImage";
import DogCaption from "peer/DogCaption";

const App = () => {
    console.log('323')
    return (
        <div>
            <div>This is a cut dog</div>
            <DogImage />
            <DogCaption name="sharik"/>
        </div>
    )};

ReactDOM.render(<App />, document.getElementById("app"));
