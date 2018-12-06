import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";
import axios from "axios";
import List from "../layout/List";

export default class WebsiteEdit extends Component {
    state = {
        name: "",
        description: "",
        errors: {},
        websites: []
    };

    componentDidMount() {
        this.getWebsitesbyUser();
    }

    getWebsitesbyUser = async () => {
        const { uid } = this.props.match.params;
        const res = await axios.get(`/api/user/${uid}/website`);
        this.setState({
            websites: res.data
        });
    };

    render() {
        const { websites } = this.state;
        const { uid } = this.props.match.params;
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row nav-height">
                    <div className="col-4 d-none d-sm-block">
                        <Link
                            className="color-white"
                            to={`/user/${uid}/website`}
                        >
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <span className="color-white padding-left">
                            <h5 className="display-inline">Websites</h5>
                        </span>
                        <Link
                            className="color-white float-right"
                            to={`/user/${uid}/website/new`}
                        >
                            <i className="fas fa-plus" />
                        </Link>
                    </div>
                    <div className="col-sm-8">
                        <Link
                            className="color-white d-sm-none"
                            to="/user/:uid/website"
                        >
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <Link
                            className="color-white padding-left"
                            to="/user/:uid/website/:wid"
                        >
                            <h5 className="display-inline">Edit Website</h5>
                        </Link>
                        <Link
                            className="color-white float-right"
                            to="/user/:uid/website"
                        >
                            <i className="fas fa-check" />
                        </Link>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-4 d-none d-sm-block">
                        <div className="container-fluid">
                            <List items={websites} type="website" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="container-fluid">
                            <form>
                                <InputGroup
                                    name="name"
                                    label="Name"
                                    type="text"
                                    placeholder="Enter to Edit Website Name..."
                                />
                                <InputGroup
                                    name="description"
                                    label="Description"
                                    type="text"
                                    rows="5"
                                    placeholder="Enter to Edit Website Description..."
                                />
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-danger float-right"
                                >
                                    Delete
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
