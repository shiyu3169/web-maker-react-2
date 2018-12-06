import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageList extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link className="color-black" to="/user/:uid/website">
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <Link
                        className="navbar-brand"
                        to="/user/:uid/website/:wid/page"
                    >
                        Pages
                    </Link>
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page/new"
                    >
                        <i className="fas fa-plus" />
                    </Link>
                </nav>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget">
                                Blog Post
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget">
                                Blogs{" "}
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget">
                                Home
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget">
                                About
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget">
                                Contact Us
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
