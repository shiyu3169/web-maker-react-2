import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ item, edit, next }) => {
    const { name } = item;
    return (
        <li className="list-group-item">
            <Link to={next}>{name}</Link>
            <Link className="float-right" to={edit}>
                <i className="fas fa-cog" />
            </Link>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    edit: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired
};

export default Item;
