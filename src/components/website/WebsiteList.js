import React, { Component } from "react";
import SingleNav from "../layout/SingleNav";
import List from "../layout/List";
import axios from "axios";

export default class WebsiteList extends Component {
    state = {
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
        const { uid } = this.props.match.params;
        const { websites } = this.state;
        return (
            <div>
                <SingleNav
                    back={`/user/${uid}`}
                    next={`/user/${uid}/website/new`}
                    title="Websites"
                    icon="plus"
                />
                <div className="container-fluid">
                    <List items={websites} type="website" />
                </div>
            </div>
        );
    }
}
