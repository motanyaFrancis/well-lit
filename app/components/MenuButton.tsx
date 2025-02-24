// MenuButton.tsx
"use client"; // This makes it a client-side component

import React from "react";

const MenuButton = () => {
  return (
    <button
      onClick={() => {
        // Get the drawer by className or any other logic and toggle it
        const drawer = document.querySelector(".drawer");
        if (drawer) {
          drawer.classList.toggle("open");
        }
      }}
      className="menu-button"
    >
      Menu
    </button>
  );
};

export default MenuButton;
