import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";
import axios from "axios";
import List from "../layout/List";

export default class WebsiteNew extends Component {
    state = {
        name: "",
        description: "",
        errors: {},
        websites: []
    };

    onSubmit = e => {
        e.preventDefault();
        const { uid } = this.props.match.params;
        const { name, description } = this.state;
        const newWeb = {
            name,
            description,
            developerId: uid
        };
        this.createWeb(newWeb);
    };

    createWeb = async newWeb => {
        const { uid } = this.props.match.params;
        await axios.post(`/api/user/${uid}/website`, newWeb);
        this.props.history.push(`/user/${uid}/website`);
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            success: false,
            errors: {
                [e.target.name]: ""
            }
        });
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
        const { name, description, errors, websites } = this.state;
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
                            to="/user/:uid/website/:wid/page/new"
                        >
                            <i className="fas fa-plus" />
                        </Link>
                    </div>
                    <div className="col-sm-8">
                        <Link
                            className="color-white d-sm-none"
                            to={`/user/${uid}/website`}
                        >
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <span className="color-white padding-left">
                            <h5 className="display-inline">New Website</h5>
                        </span>
                        <button
                            form="myForm"
                            className="color-white float-right btn bg-transparent no-padding"
                        >
                            <i className="fas fa-check" />
                        </button>
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
                            <form id="myForm" onSubmit={this.onSubmit}>
                                <InputGroup
                                    name="name"
                                    label="Name"
                                    type="text"
                                    placeholder="Name for New Website..."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <InputGroup
                                    name="description"
                                    label="Description"
                                    type="text"
                                    placeholder="Description for New Website..."
                                    rows="5"
                                    value={description}
                                    onChange={this.onChange}
                                />
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <button className="btn btn-lg btn-success float-right">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
