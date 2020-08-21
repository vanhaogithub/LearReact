import React from 'react';
import '../../css/main.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Inheritance from './Inheritance';
import Counter from './Counter';
import Button from './Button';
import Array from './Array';

class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
                <ul>
                    <li><Link to="/inheritance">Inheritance</Link></li>
                    <li><Link to="/array">Array</Link></li>
                    <li><Link to="/button">Button</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                </ul>
            </div>

        );
    }
}

export default Router;