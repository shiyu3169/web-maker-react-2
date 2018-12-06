import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const List = ({ items, type }) => {
    return (
        <ul className="list-group">
            {type === "website" &&
                items.map(item => (
                    <Item
                        key={item._id}
                        item={item}
                        next={`/user/${item.developerId}/website/${
                            item._id
                        }/page`}
                        edit={`/user/${item.developerId}/website/${item._id}`}
                    />
                ))}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

export default List;
