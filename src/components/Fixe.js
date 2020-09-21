import React from "react";
import "../style/Fixe.css";
import Chercheur from "../data/chercheur.json";

class Fixe extends React.Component {
  renderContentFixe() {
    return (
      <div className="publication-chercheur" key={Chercheur.id}>
        <img className="osmani" alt="Osmani" src={require(`../data/images/${Chercheur.image}`)} />
        <p className="name"> {Chercheur.nom} </p>
        <p className="work"> {Chercheur.profession} </p>
      </div>
    );
  }

  renderContactFixe() {
    return (
      <div className="chercheur-contact">
        <p className="ville">
          <img className="image" alt="ville" src={require("../data/images/localisation.png")} />
          <span> {Chercheur.ville} </span>
        </p>
        <a href={Chercheur.email} target="_blank" rel="noopener noreferrer">
          <p className="email">
            <img
              className="image"
              src={require("../data/images/email.png")}
              alt="email"
            />
            <span> Email </span>
          </p>
        </a>
        <a href={Chercheur.linkedin} target="_blank" rel="noopener noreferrer">
          <p className="linkedin">
            <img
              className="image"
              src={require("../data/images/linkedin.png")}
              alt="linkedin"
            />
            <span> Linkedin </span>
          </p>
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="fixe">
        <span className="border"></span>
        {this.renderContentFixe()}
        {this.renderContactFixe()}
      </div>
    );
  }
}

export default Fixe;
