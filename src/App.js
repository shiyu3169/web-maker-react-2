import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// User Components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Website Components
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Page Components
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widget Components
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";
// Layout
import Footer from "./components/layout/Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 0
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {/* User */}
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        {/* Website */}
                        <Route
                            exact
                            path="/user/:uid/website"
                            component={WebsiteList}
                        />
                        <Route
                            exact
                            path="/user/:uid/website/new"
                            component={WebsiteNew}
                        />
                        <Route
                            exact
                            path="/user/:uid/website/:wid"
                            component={WebsiteEdit}
                        />
                        {/* Page */}
                        <Route
                            exact
                            path="/user/:uid/website/:wid/page"
                            component={PageList}
                        />
                        <Route
                            exact
                            path="/user/:uid/website/:wid/page/new"
                            component={PageNew}
                        />
                        <Route
                            exact
                            path="/user/:uid/website/:wid/page/:pid"
                            component={PageEdit}
                        />
                        {/* Widget */}
                        <Route
                            exact
                            path="/user/:uid/website/:wid/page/:pid/widget"
                            component={WidgetList}
                        />
                        <Route
                            exact
                            path="/user/:uid/website/:wid/page/:pid/widget/new"
                            component={WidgetChooser}
                        />
                        <Route
                            exact
                            path="/user/:uid/website/:wid/page/:pid/widget/:wgid"
                            component={WidgetEdit}
                        />
                        <Route component={Login} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}
