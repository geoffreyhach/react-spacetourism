import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    useEffect(() => {
        const navToggle = document.querySelector(".navbar-toggle");
        const navBar = document.querySelector(".primary-navigation");

        navToggle.addEventListener("click", toggleNavBar);

        function toggleNavBar() {
            if (navToggle.getAttribute("aria-expanded") === "false") {
                navBar.style.transform = "translateX(0%)";
                navToggle.setAttribute("aria-expanded", "true");
            } else {
                navBar.style.transform = "translateX(100%)";
                navToggle.setAttribute("aria-expanded", "false");
            }
        }
        return () => {
            navToggle.removeEventListener("click", toggleNavBar);
        };
    }, []);

    return (
        <nav className="primary-navigation">
            <ul className="navbar flex fs-400 ff-sans-cond letter-spacing-3 uppercase">
                <li>
                    <NavLink className="navbar-btn" to="/">
                        <span>00</span>HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-btn" to="/destination/moon">
                        <span>01</span>DESTINATION
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-btn" to="/crew/douglas">
                        <span>02</span>CREW
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-btn" to="/technology/vehicle">
                        <span>03</span>TECHNOLOGY
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
