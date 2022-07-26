import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

class TechnologyPage extends Component {
    state = {
        currentPage: "vehicle",
    };
    componentDidMount() {
        document.querySelector("body").removeAttribute("class");
        document.querySelector("body").classList.add("technology");
    }

    getCurrentPage(page) {
        this.setState({ currentPage: page });
    }

    getPageImg() {
        let url = "/assets/technology/image-launch-vehicle-landscape.jpg";
        if (this.state.currentPage === "vehicle")
            url = "/assets/technology/image-launch-vehicle-landscape.jpg";
        if (this.state.currentPage === "spaceport")
            url = "/assets/technology/image-spaceport-landscape.jpg";
        if (this.state.currentPage === "capsule")
            url = "/assets/technology/image-space-capsule-landscape.jpg";
        return url;
    }
    render() {
        return (
            <main className="container container--technology grid flow">
                <p className="numbered-titles text-white ff-sans-cond letter-spacing-2 uppercase fs-500">
                    <span>03</span>Space Launch 101
                </p>
                <picture>
                    <img src={this.getPageImg()} alt="" />
                </picture>
                <ul className="slider-numbers">
                    <li>
                        <NavLink
                            to="vehicle"
                            onClick={() => this.getCurrentPage("vehicle")}
                        >
                            <button>1</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="spaceport"
                            onClick={() => this.getCurrentPage("spaceport")}
                        >
                            <button>2</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="capsule"
                            onClick={() => this.getCurrentPage("capsule")}
                        >
                            <button>3</button>
                        </NavLink>
                    </li>
                </ul>

                <article>
                    <Outlet />
                </article>
            </main>
        );
    }
}

export default TechnologyPage;
