import styles from'./main.module.css'
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import MoviesMain from '../movies/moviesMain/MoviesMain';
import SubscriptionsMain from '../subscriptions/SubscriptionsMain';

const Main = () => {
    const { path, url } = useRouteMatch();


    return (
        <div className={styles.container}>
            <h1>Main Page</h1>
            <div className={styles.navbar}>
                <Link to={`${url}/movies`} className={styles.navbar_item}>
                    <span>Movies</span>
                </Link>
                <Link to={`${url}/subscriptions`} className={styles.navbar_item}>
                    <span>Subscriptions</span>
                </Link>
                <span className={styles.navbar_item}>Logout</span>
            </div>

            <div className={styles.switch_container}>
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