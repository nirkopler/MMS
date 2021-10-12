import './moviesMain.css'
import React, { useEffect } from "react";
import { Switch, Route, Link} from 'react-router-dom'
import { useRouteMatch, useHistory } from 'react-router-dom';
import AllMovies from '../allMovies/AllMovies';
import AddMovie from '../AddMovie';
import EditMovie from '../EditMovie';
import Movie from '../movie';

const MoviesMain = () => {
    const { path, url} = useRouteMatch();

    return (
        <div className='movies-main-container'>
            <h1>Movies Main Page</h1>
            <div>
                <Link to={`${url}`}>
                    All Movies
                </Link>
                <Link to={`${url}/addMovie`}>
                    Add Movie
                </Link>
            </div>

            <div className='movies-main-switch-container'>
                <Switch>
                    <Route exact path={`${path}`}>
                        <AllMovies />
                    </Route>
                    <Route path={`${path}/addMovie`}>
                        <AddMovie />
                    </Route>
                    <Route path={`${path}/editMovie/:movieId`}>
                        <EditMovie />
                    </Route>
                    <Route path={`${path}/movie/:movieId`}>
                        <Movie />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default MoviesMain