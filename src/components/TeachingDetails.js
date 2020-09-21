import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "../style/_teachingdetails.scss";

class TeachingDetails extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
    // this.props;
  }

  async componentDidMount() {
    const coursesId = this.props.match.params.id;
    const file = await import(`../data/courses/${coursesId}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
      markdown: text,
    });
  }
  render() {
    return (
      <div className="courses">
        <div className="courses-md">
          <ReactMarkdown source={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default TeachingDetails;
