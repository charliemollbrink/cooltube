import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';

import { App } from "./components/app";

ReactDOM.render((
        <Router>
            <App name="One Cool Cat" />
        </Router>
    ), document.getElementById('root')
);