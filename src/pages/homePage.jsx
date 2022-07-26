import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
    componentDidMount() {
        document.querySelector("body").removeAttribute("class");
        document.querySelector("body").classList.add("home");
    }
    render() {
        return (
            <main className="container container--home grid">
                <div>
                    <h1>
                        <p className="text-light ff-sans-cond letter-spacing-2 fs-600 uppercase">
                            So, you want to travel to
                        </p>
                        <p className="text-white uppercase ff-serif fs-900 small-lh">
                            Space
                        </p>
                    </h1>
                    <p
                        className="text-light ff-sans fs-400 letter-spacing-2 big-lh"
                        style={{ maxWidth: "50ch" }}
                    >
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div>
                    <Link to="destination/moon">
                        <button className="large-btn bg-white text-black fs-600 ff-serif letter-spacing-2 uppercase">
                            explore
                        </button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default HomePage;
