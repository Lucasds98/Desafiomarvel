import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './pages/Home';
import CharacterDescription from './pages/CharacterDescription';
import MyFavorite from './pages/MyFavorite';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view-more/:id" component={CharacterDescription} />
            <Route exact path="/my-favorites" component={MyFavorite} />
        </Switch>
    </BrowserRouter>
);

export default Routes;