import React, { Component } from 'react';
import Member from "./data/homepage.json";
import "./style/_homepage.scss";
import Bottom from "./components/Homepage_bottom.js";
import Chercheur from "./data/chercheur.json";

class Homepage extends Component {

    render() {
        return (
            <div className="c-homepage">
                <div id="image">
                    <img className="c-homepage__image" src={require("./data/images/" + Member["Osmani"].image)} alt="img" />
                </div>
                <div id="informations">
                    <h1 className="c-homepage__name"> {Member["Osmani"].name} </h1>
                    <p className="c-homepage__attributes"> {Member["Osmani"].attributes} </p>
                    <h2 className="c-homepage__contact">Contact</h2>
                    {/* <p className="c-homepage__links"> {Member["Osmani"].links} </p> */}
                    <a href={Chercheur.email} target="_blank" rel="noopener noreferrer">
                        <img className="c-homepage__links" src={require("./data/images/" + Member["Osmani"].links[0][0])} alt="img" />
                        <p className="c-homepage__text"> {Member["Osmani"].links[0][1]} </p>
                    </a>
                    <a href={Chercheur.github} target="_blank" rel="noopener noreferrer">
                        <img className="c-homepage__links" src={require("./data/images/" + Member["Osmani"].links[1][0])} alt="img" />
                        <p className="c-homepage__textfin"> {Member["Osmani"].links[1][1]} </p>
                    </a>
                    <a href={Chercheur.linkedin} target="_blank" rel="noopener noreferrer">
                        <img className="c-homepage__links" src={require("./data/images/" + Member["Osmani"].links[2][0])} alt="img" />
                        <p className="c-homepage__textfin"> {Member["Osmani"].links[2][1]} </p>
                    </a>
                </div>
                <div>
                    <Bottom />
                </div>
            </div >
        );
    }


}
export default Homepage;