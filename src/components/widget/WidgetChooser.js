import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WidgetChooser extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-light fixed-top bg-light">
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page/:pid/widget"
                    >
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <Link
                        className="navbar-brand padding-left"
                        to="/user/:uid/website/:wid/page/:pid/widget/new"
                    >
                        Choose Widget
                    </Link>
                </nav>
                <div className="container">
                    <ul className="list-group-flush">
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                Heading
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Label</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Text Input</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Link</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Button</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                Image
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                Youtube
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Data Table</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Repeater</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
