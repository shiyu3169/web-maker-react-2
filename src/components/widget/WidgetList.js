import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import Image from "../layout/Image";
import Youtube from "../layout/Youtube";
import WidgetButtonGroup from "../layout/WidgetButtonGroup";

export default class WidgetList extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div>
                        <WidgetButtonGroup type="HEADING" />
                        <Heading text="Welcome" size="1" />
                    </div>
                    <div>
                        <WidgetButtonGroup type="HEADING" />
                        <Heading
                            text="Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Similique saepe vel sit
                                repellendus quis"
                            size="3"
                        />
                    </div>
                    <div>
                        <WidgetButtonGroup type="IMAGE" />
                        <Image
                            src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
                            alt="bird"
                            width="50%"
                        />
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "HEADING" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <Heading text="vel sit repellendus quis" size="3" />
                    </div>
                    <div>
                        <WidgetButtonGroup type="YOUTUBE" />
                        <Youtube
                            src="https://www.youtube.com/embed/SqrbIlUwR0U"
                            title="Golang"
                            width="20%"
                        />
                    </div>
                    <div>
                        <WidgetButtonGroup type="HEADING" />
                        <Heading
                            text="Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis nostrum maiores
                                blanditiis iste doloribus harum magni ullam
                                repellat eaque? Et veniam accusantium illo
                                nostrum dolores temporibus. Cum cupiditate alias
                                eius."
                            size="5"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
