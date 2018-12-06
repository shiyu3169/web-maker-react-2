import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";
import axios from "axios";
import PropTypes from "prop-types";

class Profile extends Component {
    state = {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        errors: {},
        success: false
    };

    componentDidMount() {
        const uid = this.props.location.state.user._id;
        this.getUser(uid);
        this.setState({
            success: false
        });
    }

    getUser = async uid => {
        const res = await axios.get(`/api/user/${uid}`);
        const {
            username,
            email = "",
            firstName = "",
            lastName = ""
        } = res.data;
        this.setState({
            username,
            email,
            firstName,
            lastName
        });
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

    onSubmit = e => {
        e.preventDefault();
        const { username, email, firstName, lastName } = this.state;

        const updatedUser = {
            username,
            email,
            firstName,
            lastName
        };
        this.updateUser(updatedUser);
    };

    updateUser = async updatedUser => {
        const { username, email, firstName, lastName } = this.updateUser;
        const { uid } = this.props.match.params;
        const res = await axios.put(`/api/user/${uid}`, updatedUser);
        const { ok } = res.data;
        if (ok) {
            this.setState({
                username,
                email,
                firstName,
                lastName,
                success: true
            });
        } else {
            this.setState({
                errors: {
                    username: "Username is taken, please try another one"
                }
            });
        }
    };

    render() {
        const {
            username,
            email,
            firstName,
            lastName,
            errors,
            success
        } = this.state;
        const { uid } = this.props.match.params;
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top">
                    <span className="navbar-brand">
                        <b>Profile</b>
                    </span>
                    <button
                        form="myForm"
                        className="color-white btn bg-transparent"
                    >
                        <i className="fas fa-check" />
                    </button>
                </nav>
                <br />
                {success && (
                    <div className="alert alert-success">
                        Profile is updated!
                    </div>
                )}
                <div className="container">
                    <form id="myForm" onSubmit={this.onSubmit}>
                        <InputGroup
                            name="username"
                            label="Username"
                            type="text"
                            placeholder="Enter your username..."
                            value={username}
                            onChange={this.onChange}
                            error={errors.username}
                        />
                        <InputGroup
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Enter to edit your email..."
                            value={email}
                            onChange={this.onChange}
                        />
                        <InputGroup
                            name="firstName"
                            label="First Name"
                            type="text"
                            placeholder="Enter to edit your first name..."
                            value={firstName}
                            onChange={this.onChange}
                        />
                        <InputGroup
                            name="lastName"
                            label="Last Name"
                            type="text"
                            placeholder="Enter to edit your last name..."
                            value={lastName}
                            onChange={this.onChange}
                        />
                        <Link
                            to={`/user/${uid}/website`}
                            className="btn btn-primary btn-block"
                        >
                            Websites
                        </Link>
                        <Link to="/login" className="btn btn-danger btn-block">
                            Logout
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

Profile.PropTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default Profile;
