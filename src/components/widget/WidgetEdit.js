import React, { Component } from "react";
import WidgetHeading from "./WidgetHeading";
import WidgetImage from "./WidgetImage";
import WidgetYoutube from "./WidgetYoutube";

export default class WidgetEdit extends Component {
    render() {
        const { type } = this.props.location.state;
        return (
            <div>
                {type === "HEADING" && <WidgetHeading />}
                {type === "IMAGE" && <WidgetImage />}
                {type === "YOUTUBE" && <WidgetYoutube />}
            </div>
        );
    }
}
