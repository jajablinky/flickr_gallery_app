import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Nav = ( {fetchData} ) => {
  return (

      /* All navlinks when clicked on fetches the relevant data */

    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="lol" onClick={() => fetchData('lol')}>lol</NavLink>
        </li>
        <li>
          <NavLink to="bebe" onClick={() => fetchData('bebe')}>bebe</NavLink>
        </li>
        <li>
          <NavLink to="sdfsdf" onClick={() => fetchData('sdfsdf')}>sdfsdf</NavLink>
        </li>
        <li>
          <NavLink to="neopets" onClick={() => fetchData('neopets')}>neopets</NavLink>
        </li>
        <li>
          <NavLink to="elon" onClick={() => fetchData('elon')}>elon</NavLink>
        </li>
        <li>
          <NavLink to="bratz" onClick={() => fetchData('bratz')}>bratz</NavLink>
        </li>
        <li>
        <NavLink to="meme" onClick={() => fetchData('meme')}>meme</NavLink>
        </li>
        <li>
        <NavLink to="millenium" onClick={() => fetchData('millenium')}>millenium</NavLink>
        </li>
        <Outlet />
      </ul>
    </nav>
  );
};

export default Nav;