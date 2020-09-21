import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import about from './data/about.md'
// import about from './data/Courses/gal-l3-19-20.md'
import "./style/_about.scss";

class About extends Component {

    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        fetch(about).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }
    render() {
        return (
            <div className="c-about">
                <h1>About</h1>
                <div className="c-about-informations">
                    <ReactMarkdown source={this.state.markdown} />
                </div>
            </div>
        );
    }
}
export default About;