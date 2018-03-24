import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { VideoList } from './videoList';
import { Video } from './video';

import '../styles/fonts.css';
import '../styles/styles.less';

export interface AppProps { name: string; }

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
                <div className="container">
                  <header>
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="header__navbar">
                          <ul className="nav navbar-nav">
                            <li className="nav-item nav-item--index"><Link to="/">{this.props.name}</Link></li>
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
              </div>

        );
    }
}
