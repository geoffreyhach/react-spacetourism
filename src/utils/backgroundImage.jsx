import React from "react";

export function handleBackgroundImage(page) {
    document.querySelector("body").removeAttribute("class");
    document.querySelector("body").classList.add(page);
}
