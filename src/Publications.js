import React from "react";
import "./style/Publications.css";
import Fixe from "./components/Fixe";
import ContentPublication from "./components/ContentPublication";

class Publications extends React.Component {
  render() {
    return (
      <div className="publication">
        <Fixe />
        <ContentPublication />
      </div>
    );
  }
}

export default Publications;
