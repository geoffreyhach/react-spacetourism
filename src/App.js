import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/homePage";
import Destination from "./pages/destinationPage";
import PlanetArticle from "./components/planetArticle";
import CrewPage from "./pages/crewPage";
import CrewArticle from "./components/crewArticle";
import TechnologyPage from "./pages/technologyPage";
import React from "react";
import TechnologyArticle from "./components/technologyArticle";

function App() {
    return (
        <React.Fragment>
            <header className="flex">
                <div className="logo"></div>
                <button
                    className="navbar-toggle"
                    aria-expanded="false"
                ></button>
                <NavBar />
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="destination" element={<Destination />}>
                        <Route
                            path="moon"
                            element={<PlanetArticle planet="moon" />}
                        />
                        <Route
                            path="mars"
                            element={<PlanetArticle planet="mars" />}
                        />
                        <Route
                            path="europa"
                            element={<PlanetArticle planet="europa" />}
                        />
                        <Route
                            path="titan"
                            element={<PlanetArticle planet="titan" />}
                        />
                    </Route>
                    <Route path="crew" element={<CrewPage />}>
                        <Route
                            path="douglas"
                            element={<CrewArticle member="Douglas Hurley" />}
                        />
                        <Route
                            path="mark"
                            element={<CrewArticle member="Mark Shuttleworth" />}
                        />
                        <Route
                            path="victor"
                            element={<CrewArticle member="Victor Glover" />}
                        />
                        <Route
                            path="anousheh"
                            element={<CrewArticle member="Anousheh Ansari" />}
                        />
                    </Route>
                    <Route path="technology" element={<TechnologyPage />}>
                        <Route
                            path="vehicle"
                            element={
                                <TechnologyArticle page="Launch vehicle" />
                            }
                        />
                        <Route
                            path="spaceport"
                            element={<TechnologyArticle page="Spaceport" />}
                        />
                        <Route
                            path="capsule"
                            element={<TechnologyArticle page="Space capsule" />}
                        />
                    </Route>
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default App;
