import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PageImg from "../components/pageImg";
import { handleBackgroundImage } from "../utils/backgroundImage";

class CrewPage extends Component {
    state = {
        currentMember: "Douglas Hurley",
    };

    componentDidMount() {
        handleBackgroundImage("crew");
    }

    getCurrentMember(member) {
        this.setState({ currentMember: member });
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

                <PageImg page="crew" item={this.state.currentMember} />

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
