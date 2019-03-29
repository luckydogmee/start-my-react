import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Ant from '../pages/Ant';
import Comment from '../pages/Comment';

const router = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Ant" component={Ant}></Route>
                <Route path="/Comment" component={Comment}></Route>
            </Switch>
        </Router>
    );
};

export default router;
