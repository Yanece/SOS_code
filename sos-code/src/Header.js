import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src="/images/sos_code.jpeg" alt="SOS code" />
        </div>
        <div className="login">
          <button>Se connecter</button>
        </div>
      </header>
    );
  }
}

export default Header;
