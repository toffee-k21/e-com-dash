import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex bg-black text-white ">
          <li className="p-1 m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="p-1 m-1">
            <Link to="/add">Add</Link>
          </li>
          <li className="p-1 m-1">
            <Link to="/update">Update</Link>
          </li>
          <li className="p-1 m-1">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="p-1 m-1">
            <Link to="/logout">LogOut</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
