import React, { useState } from "react";

const Menu = () => {
  const [Open, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!Open);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        Sélectionnez une langue {Open? '▲' : '▼'}
      </button>
      {Open && (
        <ul>
          <li>Python</li>
          <li>JavaScrit</li>
          <li>C</li>
          <li>JavaScrit</li>
          <li>JavaScrit</li>
          <li>JavaScrit</li>
          <li>JavaScrit</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
