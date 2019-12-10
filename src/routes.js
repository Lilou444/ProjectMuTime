import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home';
import DetailsAlbum from './components/detailsAlbum';

const Routes = () => {
    return(
        <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/details/:id" exact component={DetailsAlbum}/>
        </Switch>
    )
}

export default Routes;