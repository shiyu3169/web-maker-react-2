import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";
import axios from "axios";

class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: {}
    };

    login = async user => {
        try {
            const res = await axios.post("/api/login", user);
            this.props.history.push({
                pathname: `/profile`,
                state: { user: res.data }
            });
        } catch {
            this.setState({
                errors: {
                    match: "Username and password are not matched"
                }
            });
        }
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;

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

        const user = { username, password };
        // fetch request
        this.login(user);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <h1>Login</h1>
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
                    <button className="btn btn-primary btn-block">Login</button>
                    <Link to="/register" className="btn btn-success btn-block">
                        Register
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;
