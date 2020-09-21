import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Member from "../data/homepage.json";
import "../style/_homepage.scss";

class Homepage_bottom extends Component {

    render() {
        return (
            <div id="previews">
                <div id="research">
                    <h2>Research</h2>
                    <p className="name"> {Member["Osmani"].previews[0]} </p>
                    <Link className="links-next" to="./Research">
                        <p>Suite ...</p>
                    </Link>
                </div>
                <div className="divider"></div>
                <div id="publications">
                    <h2>Publications</h2>
                    <p className="attributes"> {Member["Osmani"].previews[1]} </p>
                    <Link className="links-next" to="./publications">
                        <p>Suite ...</p>
                    </Link>
                </div>
                <div className="divider"></div>
                <div id="teaching">
                    <h2>Teaching</h2>
                    <p className="links"> {Member["Osmani"].previews[2]} </p>
                    <Link className="links-next" to="./Teachings">
                        <p>Suite ...</p>
                    </Link>
                </div>
            </div>

        );
    }
}

export default Homepage_bottom;