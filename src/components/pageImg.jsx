import React from "react";
import data from "../data.json";

//this component needs a few props : name of the page (props.page) and item (props.item) based on the data.json file

const PageImg = (props) => {
    const getSmallImg = () => {
        // let url;

        if (props.page === "technology")
            return data[props.page].filter((res) => res.name === props.item)[0]
                .images["landscape"];
        else
            return data[props.page].filter(
                (res) => res.name.toLowerCase() === props.item.toLowerCase()
            )[0].images.webp;
    };

    const getBigImg = () => {
        // let url;

        if (props.page === "technology")
            return data[props.page].filter((res) => res.name === props.item)[0]
                .images["portrait"];
        else
            return data[props.page].filter(
                (res) => res.name.toLowerCase() === props.item.toLowerCase()
            )[0].images.png;
    };

    const getImgClass = () => {
        return props.page + "-img";
    };

    return (
        <picture>
            <source srcSet={getBigImg()} media="(min-width:45em)" />
            <source srcSet={getSmallImg()} />
            <img
                src={getSmallImg()}
                alt="the subject"
                className={getImgClass()}
            />
        </picture>
    );
};

export default PageImg;
