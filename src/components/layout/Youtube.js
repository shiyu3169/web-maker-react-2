import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ title, width, src }) => {
    return (
        <div
            className="embed-responsive embed-responsive-16by9"
            style={{ width: width }}
        >
            <iframe
                title={title}
                src={src}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    );
};

Youtube.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string
};

Youtube.defaultProps = {
    width: "100%"
};

export default Youtube;
