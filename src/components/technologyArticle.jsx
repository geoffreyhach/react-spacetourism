import React, { useEffect } from "react";
import data from "../data.json";

const TechnologyArticle = (props) => {
    const techData = data.technology.filter(
        (tech) => tech.name === props.page
    )[0];

    return (
        <React.Fragment>
            <div>
                <p
                    className="
                    text-light
                    fs-300
                    ff-sans-cond
                    letter-spacing-3
                    uppercase"
                >
                    The terminology...
                </p>

                <p className="text-white ff-serif letter-spacing-2 fs-600 uppercase">
                    {techData.name}
                </p>
            </div>

            <p className="text-light ff-sans fs-400 letter-spacing-2 big-lh">
                {techData.description}
            </p>
        </React.Fragment>
    );
};

export default TechnologyArticle;
