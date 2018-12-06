import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";

export default class PageNew extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page"
                    >
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <Link
                        className="navbar-brand"
                        to="/user/:uid/website/:wid/page/new"
                    >
                        New Page
                    </Link>
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page"
                    >
                        <i className="fas fa-check" />
                    </Link>
                </nav>
                <div className="container">
                    <form>
                        <InputGroup
                            name="name"
                            label="Name"
                            type="text"
                            placeholder="Name for New Page..."
                        />
                        <InputGroup
                            name="title"
                            label="Title"
                            type="text"
                            placeholder="Title for New Page..."
                        />
                        <Link
                            to="/user/:uid/website/:wid/page"
                            className="btn btn-lg btn-warning"
                        >
                            Cancel
                        </Link>
                        <Link
                            to="/user/:uid/website/:wid/page"
                            className="btn btn-lg btn-success float-right"
                        >
                            Submit
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
