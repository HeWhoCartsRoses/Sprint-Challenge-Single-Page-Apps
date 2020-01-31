import React from "react";
import Welcome from './WelcomePage'
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Welcome />
    </header>
  );
}
