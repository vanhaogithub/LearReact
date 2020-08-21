import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inheritance from '../src/components/base/Inheritance';
import Array from '../src/components/base/Array';
import Button from '../src/components/base/Button';
import Counter from '../src/components/base/Counter';
const Routes = ({ match }) => (
    <>
        <Switch>
            <Route exact path="/inheritance" component={Inheritance} />
            <Route exact path="/array" component={Array} />
            <Route exact path="/button" component={Button} />
            <Route exact path="/counter" component={Counter} />
        </Switch>
    </>
);

export default Routes;
