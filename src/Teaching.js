import React from "react";
import "./style/Teaching.css";
import Fixe from "./components/Fixe";
import ContentTeaching from "./components/ContentTeaching"

class Teaching extends React.Component {



    render(){
        return (
            <div className="teaching">
                <Fixe/>
                <ContentTeaching/>
            </div>
        )
    }
}


export default Teaching;