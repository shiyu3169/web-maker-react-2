import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WidgetButtonGroup = ({ type }) => {
    return (
        <div className="absolute-right">
            <Link
                to={{
                    pathname: "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                    state: { type: type }
                }}
            >
                <i className="fas fa-cog" />
            </Link>
            <Link to="#">
                <i className="fas fa-bars" />
            </Link>
        </div>
    );
};

WidgetButtonGroup.propTypes = {
    type: PropTypes.string.isRequired
};

export default WidgetButtonGroup;
