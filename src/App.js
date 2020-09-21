import React, { useState } from "react";
import "./style/App.css";
import Homepage from "./Homepage";
import About from "./About";
import Publications from "./Publications";
import Teaching from "./Teaching";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import TeachingDetails from "./components/TeachingDetails";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";


function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Header onClick={themeToggler} theme={theme} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/publications" component={Publications} />
            <Route exact path="/teachings" component={Teaching} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/teaching/:id" component={TeachingDetails} />
          </Switch>
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
