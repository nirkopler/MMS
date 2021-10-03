import './main.css'
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import MoviesMain from '../movies/moviesMain/MoviesMain';
import SubscriptionsMain from '../subscriptions/SubscriptionsMain';

const Main = () => {
    const { path, url } = useRouteMatch();


    return (
        <div className='container'>
            <h1>Main Page</h1>
            <div className='navbar'>
                <Link to={`${url}/movies`} className='navbar-item'>
                    <span>Movies</span>
                </Link>
                <Link to={`${url}/subscriptions`} className='navbar-item'>
                    <span>Subscriptions</span>
                </Link>
                <span className='navbar-item'>Logout</span>
            </div>

            <div className='switch-container'>
                <Switch>
                    <Route path={`${path}/movies`}>
                        <MoviesMain />
                    </Route>
                    <Route path={`${path}/subscriptions`}>
                        <SubscriptionsMain />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Main