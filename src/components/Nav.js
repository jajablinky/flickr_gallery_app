import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Nav = ( {fetchData} ) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="shiba" onClick={() => fetchData('shiba')}>Shiba</NavLink>
        </li>
        <li>
          <NavLink to="anime" onClick={() => fetchData('anime')}>Anime</NavLink>
        </li>
        <li>
          <NavLink to="sasuke" onClick={() => fetchData('sasuke')}>Sasuke</NavLink>
        </li>
        <Outlet />
      </ul>
    </nav>
  );
};

export default Nav;