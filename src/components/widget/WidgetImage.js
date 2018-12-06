import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WidgetImage extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <form>
                        <div class="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input type="text" id="name" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="url">
                                <b>Url</b>
                            </label>
                            <input type="text" id="url" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="width">
                                <b>Width</b>
                            </label>
                            <input
                                type="text"
                                id="width"
                                class="form-control"
                            />
                        </div>
                        <Link
                            to="/user/:uid/website/:wid/page/:pid/widget"
                            class="btn btn-danger btn-block"
                        >
                            Delete
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
