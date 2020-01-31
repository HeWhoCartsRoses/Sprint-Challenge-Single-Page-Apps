import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterCard from "./CharacterCard";
//import Spells from "./Spells";
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Router>
          <div>
            <Switch>
              <Route path="/" component={CharacterCard} />
            </Switch>
          </div>
        </Router>
      </header>
    </section>
  );
}
