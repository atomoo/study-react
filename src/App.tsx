import * as React from 'react';
import {hot} from 'react-hot-loader/root';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import About from './page/About';

const {Suspense, lazy} = React;
const AsyncHome = lazy(() => import('./page/Home'));

function App() {
    return <Router>
        <div className="menu">menu</div>
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path="/" exact component={AsyncHome} />
                <Route path="/about" component={About} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Suspense>
    </Router>;
}

export default hot(App);
