import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './components/home';
import DetailsAlbum from './components/detailsAlbum';
import FavoritesAlbums from './components/favoritesAlbums';
import Login from './components/login';

const Routes = () => {
    return(
        <Switch>
           <Route path="/" exact component={App} />
           <Route path="/home" exact component={Home} />
           <Route path="/login" exact component={Login} />
           <Route path="/details/:id" exact component={DetailsAlbum}/>
           <Route path="/favorites" exact component={FavoritesAlbums}/>
        </Switch>
    )
}

export default Routes;