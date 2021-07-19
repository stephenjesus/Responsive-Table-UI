import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../src/screens/dashboard/index';
import  SideNav  from '../src/components/sidebar';
export class Navigator extends Component {
    render() {
        return (
            <BrowserRouter>
                {<SideNav context={this} currentPath={window.location.pathname} />}
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Navigator
