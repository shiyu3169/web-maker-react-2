import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";
import axios from "axios";

class Register extends Component {
    state = {
        username: "",
        password: "",
        verifyPassword: "",
        errors: {}
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async e => {
        e.preventDefault();
        const { username, password, verifyPassword } = this.state;

        // Check errors
        if (username === "") {
            this.setState({
                errors: { username: "Username is required" }
            });
            return;
        }

        if (password === "") {
            this.setState({
                errors: { password: "Password is required" }
            });
            return;
        }

        if (verifyPassword === "") {
            this.setState({
                errors: { verifyPassword: "Verify Password is required" }
            });
            return;
        }

        if (verifyPassword !== password) {
            this.setState({
                errors: {
                    match: "Password and Verify Passwrd are not match"
                }
            });
            return;
        }

        // Clear errors
        this.setState({
            errors: {}
        });

        // Check if the username is taken
        let res = await axios.get(`/api/user?username=${username}`);
        if (!res.data) {
            const user = { username, password };
            // register the user
            res = await axios.post("/api/register", user);
            // navigate to profile
            this.props.history.push({
                pathname: `/profile`,
                state: { user: res.data }
            });
        } else {
            this.setState({
                errors: {
                    match: "Username is taken, please try another one"
                }
            });
        }
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <h1>Register</h1>
                {errors.match && (
                    <div className="alert alert-danger">{errors.match}</div>
                )}
                <form onSubmit={this.onSubmit}>
                    <InputGroup
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Enter your username..."
                        onChange={this.onChange}
                        error={errors.username}
                    />
                    <InputGroup
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password..."
                        onChange={this.onChange}
                        error={errors.password}
                    />
                    <InputGroup
                        name="verifyPassword"
                        label="Verify Password"
                        type="password"
                        placeholder="Verify your password..."
                        onChange={this.onChange}
                        error={errors.verifyPassword}
                    />
                    <button className="btn btn-primary btn-block">
                        Register
                    </button>
                    <Link to="/login" className="btn btn-danger btn-block">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

export default Register;
