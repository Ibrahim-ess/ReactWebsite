import React from "react";
import TeachingData from "../data/teachings.json";
import { Link } from "react-router-dom";

class ContentTeaching extends React.Component {
  state = {
    year: "all",
  };

  onClick = (year) => {
    this.setState({ year: year });
  };


  renderTeaching(element) {
    return (
      <div className="teaching-content">
        <div className="article" key={element.id}>

          <Link className="link-descr" to={"/teaching/" + element.id}>
            <p className="title"> {element.title} </p>
            <p className="authors"> {element.authors} </p>
            <p className="booktitle"> {element.booktitle} </p>
          </Link>
          <div className="links">
            <p>
              {element.links.Projects && <Link to="./Projects">PROJECTS</Link>}
            </p>
            <p>
              {element.links.GitHub && (
                <a
                  href={element.links.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="content">
        <h1>Teaching</h1>
        <div className="publi">
          <div className="years" onClick={() => this.onClick("all")}>
            <h2 className={this.state.year === "all" ? "year" : ""}> ALL</h2>{" "}
            {/*class "topic" qui permettra d'encadrer le topic sur lequel on est*/}
          </div>
          {TeachingData.map((element, i) => (
            <div
              className="years"
              key={i}
              onClick={() => this.onClick(element.year)}
            >
              <h2 className={this.state.year === element.year ? "year" : ""}>
                {element.year}
              </h2>
            </div>
          ))}

          <div className="teaching-list">
            {TeachingData.map((element, i) =>
              element.list.map(
                (teaching) =>
                  (this.state.year === element.year ||
                    this.state.year === "all") && //affichage des publications en fonction du topic (state) sur lequel on est
                  this.renderTeaching(teaching)
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div className="renderTeaching">{this.renderContent()}</div>;
  }
}

export default ContentTeaching;
