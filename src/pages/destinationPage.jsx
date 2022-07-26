import React, { Component, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

class Destination extends Component {
    state = {
        currentPlanet: "moon",
    };

    getCurrentPlanet(planet) {
        this.setState({ currentPlanet: planet });
    }

    getPlanetImg() {
        let url = "/assets/destination/image-moon.webp";
        if (this.state.currentPlanet == "mars")
            url = "/assets/destination/image-mars.webp";
        if (this.state.currentPlanet == "europa")
            url = "/assets/destination/image-europa.webp";
        if (this.state.currentPlanet == "titan")
            url = "/assets/destination/image-titan.webp";

        return url;
    }

    render() {
        return (
            <main className="container container--destination grid flow">
                <p className="numbered-titles text-white ff-sans-cond letter-spacing-2 uppercase fs-500">
                    <span>01</span>Pick your destination
                </p>
                <picture>
                    <img src={this.getPlanetImg()} alt="image of the planet" />
                </picture>
                <ul className="tabs flex fs-300 ff-sans-cond letter-spacing-3 uppercase">
                    <li>
                        <NavLink
                            to="/destination/moon"
                            className="planet-navlink"
                            onClick={() => this.getCurrentPlanet("moon")}
                        >
                            MOON
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destination/mars"
                            className="planet-navlink"
                            onClick={() => this.getCurrentPlanet("mars")}
                        >
                            MARS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destination/europa"
                            className="planet-navlink"
                            onClick={() => this.getCurrentPlanet("europa")}
                        >
                            EUROPA
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destination/titan"
                            className="planet-navlink"
                            onClick={() => this.getCurrentPlanet("titan")}
                        >
                            TITAN
                        </NavLink>
                    </li>
                </ul>

                <article className="flow">
                    <Outlet />
                </article>
            </main>
        );
    }
}

export default Destination;
