import React from 'react';
import '../../css/main.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Inheritance from './Inheritance';
import Counter from './Counter';
import Button from './Button';
import Array from './Array';

class Router extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/inheritance">Inheritance</Link></li>
                        <li><Link to="/array">Array</Link></li>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                    </ul>
                    <Route exact path="/inheritance" component={Inheritance} />
                    <Route exact path="/array" component={Array} />
                    <Route exact path="/button" component={Button} />
                    <Route exact path="/counter" component={Counter} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;