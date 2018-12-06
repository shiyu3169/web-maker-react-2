import React from "react";
import PropTypes from "prop-types";

const Heading = ({ text, size }) => {
    return (
        <div>
            {size === "1" && <h1>{text}</h1>}
            {size === "2" && <h2>{text}</h2>}
            {size === "3" && <h3>{text}</h3>}
            {size === "4" && <h4>{text}</h4>}
            {size === "5" && <h5>{text}</h5>}
            {size === "6" && <h6>{text}</h6>}
        </div>
    );
};

Heading.propTypes = {
    size: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Heading;
