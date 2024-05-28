import React, { Component } from "react";


class Header extends Component {
  render() {
    return (
        <header>
        <div class="logo">
          <img src="logo.png" alt="SOS code" />
        </div>
        <div class="login">
          <button>Se connecter</button>
        </div>
      </header>
    );
  }
}

export default Header;