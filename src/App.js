import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './styles/styles.css';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div = className="green-yellow">
        <header>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </header>
            <main>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
            </main>
      </div>
      </Router>
    );
  }
}

const Home = () =>
{
    return (
        <div>
            <h2>HELLO</h2>
            <p>hem</p>

            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
    );
};
const About = () =>
{
    return (
        <div>
            <h2 className="{styles.header}">ABOUT ME</h2>

            <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    );
};

const Contact = () => {
    return (
        <div>
            <h2>ABOUT ME</h2>

            <p>som sorta contactform</p>
        </div>
    )
};

export default App;
