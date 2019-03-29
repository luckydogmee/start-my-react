import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends Component{
    render(){
        return (
            <div>
                <ul className="router-list">
                    <li><Link to='Ant'>and design demo</Link></li>
                    <li><Link to='Comment'>comment demo</Link></li>
                </ul>
            </div>
        )
    }
}