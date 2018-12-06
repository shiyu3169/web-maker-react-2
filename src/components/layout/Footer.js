import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <div className="full-width">
                <Link className="color-white float-right" to="/user/:uid">
                    <i className="fas fa-user" />
                </Link>
            </div>
        </nav>
    );
};
