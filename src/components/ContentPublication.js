import React from "react";
import "../style/Publications.css";
import PublicationData from "../data/Publications.json";

class ContentPublication extends React.Component {
  state = {
    year: "all",
  };

  onClick = (year) => {
    this.setState({ year: year });
  };

  publication(element) {
    return (
      <div>
        {element.publications.map((publication) => (
          <div className="publication-content" key={publication.id}>
            <p className="title"> {publication.title} </p>
            <p className="authors"> {publication.authors} </p>
            <p className="booktitle"> {publication.booktitle} </p>
            <div className="links">

              {publication.links.pdf && (
                <p>
                  <a
                    href={publication.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </p>
              )}

              {publication.links.slides && (
                <p>
                  <a
                    href={publication.links.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLIDES
                    </a>
                </p>
              )}

              {publication.links.code && (
                <p>
                  <a
                    href={publication.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CODE
                  </a>
                </p>
              )}

              {publication.links.poster && (
                <p>
                  <a
                    href={publication.links.poster}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    POSTER
                  </a>
                </p>
              )}

            </div>
          </div>
        ))}
      </div>
    );
  }

  renderContent() {
    return (
      <div className="content">
        <h1>Publications</h1>
        <div className="publi">
          <div className="years" onClick={() => this.onClick("all")}>
            <h2 className={this.state.year === "all" ? "year" : ""}> ALL</h2>{" "}
            {/*class "year" qui permettra d'encadrer l'année sur laquelle on est*/}
          </div>
          {PublicationData.map((element, i) => (
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

          {PublicationData.map(
            (element, i) =>
              (this.state.year === element.year ||
                this.state.year === "all") && ( 
                <div key={i}>{this.publication(element)}</div>
              )
          )}
        </div>
      </div>
    );
  }

  render() {
    return <div className="renderPublication">{this.renderContent()}</div>;
  }
}

export default ContentPublication;

