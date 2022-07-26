import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

class CrewPage extends Component {
    state = {
        currentMember: "Douglas Hurley",
    };

    componentDidMount() {
        document.querySelector("body").removeAttribute("class");
        document.querySelector("body").classList.add("crew");
    }

    getCurrentMember(member) {
        this.setState({ currentMember: member });
    }

    getMemberImg() {
        let url = "/assets/crew/image-douglas-hurley.png";
        if (this.state.currentMember === "Douglas Hurley")
            url = "/assets/crew/image-douglas-hurley.png";
        if (this.state.currentMember === "Mark Shuttleworth")
            url = "/assets/crew/image-mark-shuttleworth.png";
        if (this.state.currentMember === "Victor Glover")
            url = "/assets/crew/image-victor-glover.webp";
        if (this.state.currentMember === "Anousheh Ansari")
            url = "/assets/crew/image-anousheh-ansari.webp";
        return url;
    }

    render() {
        const divStyle = {
            marginTop: "1rem",
            gap: "1rem",
            justifyContent: "center",
        };

        return (
            <main className="container container--crew grid flow">
                <p className="numbered-titles text-white ff-sans-cond letter-spacing-2 uppercase fs-500">
                    <span>02</span>Meet your crew
                </p>
                <picture>
                    <img
                        className="crew-img"
                        src={this.getMemberImg()}
                        alt="Douglas Hurley"
                    />
                </picture>
                <div className="dots flex" style={divStyle}>
                    <NavLink
                        to="douglas"
                        onClick={() => this.getCurrentMember("Douglas Hurley")}
                    >
                        <button></button>
                    </NavLink>
                    <NavLink
                        to="mark"
                        onClick={() =>
                            this.getCurrentMember("Mark Shuttleworth")
                        }
                    >
                        <button></button>
                    </NavLink>
                    <NavLink
                        to="victor"
                        onClick={() => this.getCurrentMember("Victor Glover")}
                    >
                        <button></button>
                    </NavLink>
                    <NavLink
                        to="anousheh"
                        onClick={() => this.getCurrentMember("Anousheh Ansari")}
                    >
                        <button></button>
                    </NavLink>
                </div>
                <article className="crew-article">
                    <Outlet />
                </article>
            </main>
        );
    }
}

export default CrewPage;
