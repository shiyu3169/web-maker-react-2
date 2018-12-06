import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, width }) => {
    return (
        <div>
            <img className="img-fluid" src={src} alt={alt} width={width} />
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.string
};

Image.defaultProps = {
    alt: "internet error",
    width: "100%"
};

export default Image;
