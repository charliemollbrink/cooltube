import * as React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { VideoList } from "./videoList";
import { Video } from "./video";

import '../styles/fonts.css';
import '../styles/styles.less';

export interface AppProps { name: string; }

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
                <div>
                  <header>
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="header__navbar">
                          <ul className="nav navbar-nav">
                            <li className="nav__item nav__item--index"><Link to="/">{this.props.name}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </header>
                  <main>
                      <Switch>
                          <Route exact={true} path="/" component={VideoList}/>
                          <Route path="/video/:id" component={Video}  />
                      </Switch>
                  </main>
                  <footer>
                     <span className="footer__contact">
                         <span className="footer__contact__email">email@onecoolcat.io</span>
                         <span className="footer__contact__phone">0110-010101010</span>
                     </span>
                  </footer>
              </div>

        );
    }
}
