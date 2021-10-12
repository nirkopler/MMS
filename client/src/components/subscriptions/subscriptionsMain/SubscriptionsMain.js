import React, { useState } from "react";
import { Switch, Route, Link} from 'react-router-dom'
import { useRouteMatch, useHistory } from 'react-router-dom';
import AddMember from "../AddMember";
import AllMembers from "../AllMembers";
import EditMember from "../EditMember";
import Member from "../member";

const SubscriptionsMain = () => {
    const { path, url} = useRouteMatch();

    return (
        <div className='movies-main-container'>
            <h1>Subscriptions Main Page</h1>
            <div>
                <Link to={`${url}`}>
                    All Members
                </Link>
                <Link to={`${url}/addMember`}>
                    Add Member
                </Link>
            </div>

            <div className='movies-main-switch-container'>
                <Switch>
                    <Route exact path={`${path}`}>
                        <AllMembers />
                    </Route>
                    <Route path={`${path}/addMember`}>
                        <AddMember />
                    </Route>
                    <Route path={`${path}/editMember/:memberId`}>
                        <EditMember />
                    </Route>
                    <Route path={`${path}/member/:memberId`}>
                        <Member />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default SubscriptionsMain