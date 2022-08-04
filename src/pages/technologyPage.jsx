import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PageImg from "../components/pageImg";
import { handleBackgroundImage } from "../utils/backgroundImage";

class TechnologyPage extends Component {
    state = {
        currentPage: "vehicle",
    };

    componentDidMount() {
        handleBackgroundImage("technology");
    }

    getCurrentPage(page) {
        this.setState({ currentPage: page });
    }

    getPageImg() {
        if (this.state.currentPage === "vehicle") return "Launch vehicle";
        if (this.state.currentPage === "spaceport") return "Spaceport";
        if (this.state.currentPage === "capsule") return "Space capsule";
    }
    render() {
        return (
            <main className="container container--technology grid flow">
                <p className="numbered-titles text-white ff-sans-cond letter-spacing-2 uppercase fs-500">
                    <span>03</span>Space Launch 101
                </p>

                <PageImg page="technology" item={this.getPageImg()} />

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
