import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleNav = ({ back, title, icon, next }) => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-primary">
            <Link className="color-white" to={back}>
                <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand">
                <b>Websites</b>
            </span>
            {icon === "plus" && (
                <Link className="color-white" to={next}>
                    <i className="fas fa-plus" />
                </Link>
            )}
            {icon === "check" && (
                <button
                    form="myForm"
                    className="color-white float-right btn bg-transparent no-padding"
                >
                    <i className="fas fa-check" />
                </button>
            )}
        </nav>
    );
};

SingleNav.propTypes = {
    back: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default SingleNav;
