import React, { Component } from "react";
import data from "../data.json";

class PlanetArticle extends Component {
    componentDidMount() {
        document.querySelector("body").removeAttribute("class");
        document.querySelector("body").classList.add("destination");
    }

    render() {
        const planetData = data.destinations.filter(
            (res) => res.name.toLowerCase() === this.props.planet
        )[0];

        return (
            <React.Fragment>
                <h1 className="ff-serif text-white fs-800 small-lh uppercase planet-name">
                    {planetData.name}
                </h1>
                <p className="text-light ff-sans fs-400 letter-spacing-2 big-lh planet-infos">
                    {planetData.description}
                </p>
                <div className="divider"></div>
                <div className="distance">
                    <p className="text-light fs-500 ff-sans-cond uppercase ">
                        avg. distance
                    </p>
                    <p className=" text-white fs-600 ff-serif letter-spacing-2 uppercase">
                        {planetData.distance}
                    </p>
                </div>
                <div className="travel">
                    <p className="text-light fs-500 ff-sans-cond uppercase">
                        est.travel time
                    </p>
                    <p className=" text-white fs-600 ff-serif letter-spacing-2 uppercase">
                        {planetData.travel}
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default PlanetArticle;
