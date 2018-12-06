import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WidgetHeading extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">
                                <b>Text</b>
                            </label>
                            <input
                                type="text"
                                id="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">
                                <b>Size</b>
                            </label>
                            <input
                                type="number"
                                id="size"
                                className="form-control"
                            />
                        </div>
                        <Link
                            to="/user/:uid/website/:wid/page/:pid/widget"
                            className="btn btn-danger btn-block"
                        >
                            Delete
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
