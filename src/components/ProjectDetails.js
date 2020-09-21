import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "../style/_Projectdetails.scss";
import projects from "../data/iot-projects/iot-projects.json";
import YouTube from "react-youtube";

class ProjetDetails extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const file = await import(`../data/iot-projects/${id}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
      markdown: text,
    });
  }
  render() {
    const Courseid = this.props.match.params.id;
    const opts = {
      width: "90%",
      height: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <div className="projects">
        <div className="project-json">
          {projects.map((p) =>
            p.projects.map(
              (element) =>
                element.id === Courseid /*this.props.id*/ && (
                  <>
                    <div className="informations-project" key={element.id}>
                      <h1 className="project-title"> {element.id}</h1>
                      <div className="project-author">
                        {element.authors.map((author, i) => (
                          <span key={i}>
                            {i > 0 && ", "}
                            {author}
                          </span>
                        ))}
                      </div>
                      {/* <p className="project-author"> {element.authors}</p> */}
                      <div className="links">
                        <a
                          className="project-links"
                          href={element.links.PDF}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>PDF</p>
                        </a>
                        <a
                          className="project-links"
                          href={element.links.Slides}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Slides</p>
                        </a>
                        <a
                          className="project-links"
                          href={element.links.Video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Video</p>
                        </a>
                        <a
                          className="project-links"
                          href={element.links.Code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Code</p>
                        </a>
                      </div>
                    </div>
                    <div className="video-project">
                      <YouTube
                        videoId={element.links.Video}
                        opts={opts}
                        onReady={this._onReady}
                      />
                      {/* <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="90%" height="100%" src="p.projects[0].links.Video" id="widget4"></iframe> */}
                    </div>
                  </>
                )
            )
          )}
        </div>
        <div className="project-md">
          <ReactMarkdown source={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default ProjetDetails;
