import React, { Component } from "react";
import data from "../data.json";

class CrewArticle extends Component {
    componentDidMount() {
        document.querySelector("body").removeAttribute("class");
        document.querySelector("body").classList.add("crew");
    }

    render() {
        const memberData = data.crew.filter(
            (member) => member.name === this.props.member
        )[0];

        return (
            <React.Fragment>
                <div>
                    <p className="text-white ff-serif letter-spacing-2 fs-500 uppercase role">
                        {memberData.role}
                    </p>
                    <h2 className="text-white ff-serif letter-spacing-2 fs-600 uppercase">
                        {memberData.name}
                    </h2>
                </div>
                <p className="text-light ff-sans fs-400 letter-spacing-2 big-lh">
                    {memberData.bio}
                </p>
            </React.Fragment>
        );
    }
}

export default CrewArticle;
