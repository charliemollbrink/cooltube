import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/fonts.css';
import '../styles/styles.less';


export interface AppProps { name: string; }

export class App extends React.Component<AppProps, {}> {
    render() {
        return <Router>
            <div className="menu">
                <header>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link className="menu__index" to="/">{this.props.name}</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/direction">Direction</Link></li>
                    </ul>
                </header>
                <main>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/directions" component={Directions} />
                </main>
            </div>
            </Router>;
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
            <h2>ABOUT ME</h2>

            <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    );
};

const Blog = () =>
{
    return (
        <div>
            <article>
                <h2>Blog Post #2</h2>

                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.
                </p>
            </article>
            <article>
                <h2>Blog Post #2</h2>

                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.
                </p>
            </article>
        </div>

    );
};

const Contact = () => {
    return (
        <div>
            <h2>CONTACT</h2>

            <p>som sorta contactform</p>
        </div>
    )
};

const Directions = () => {
    return (
        <div>
            <h2>Directions</h2>

            <p>Take bus</p>
            <div> a map </div>
        </div>
    )
};