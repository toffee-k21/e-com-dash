import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from "../utils/Context";

const Nav = () => {

  const auth = localStorage.getItem("user");
  const navigate = useNavigate()
  console.log(auth)

  const contextget = useContext(ProductContext)//reading context api store
  console.log(contextget)

  const handleLogout = ( )=>{
    localStorage.clear("user")
    navigate("/sign")
  }

  return (
    <div>
      <nav className="px-14 bg-black">
        <ul className="flex  text-white ">
          {auth?<>
            <li className="p-1 m-2">
              <img src="https://i.pinimg.com/originals/75/fa/9b/75fa9b17f632646e5ae7fae3cf837761.jpg" className="w-10 rounded-xl" />
              </li>
          <li className="p-1 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-1 m-2">
            <Link to="/add">Add</Link>
          </li>
          <li className="p-1 m-2">
            <Link to="/products">Products</Link>
          </li>
          <li className="p-1 m-2">
            <Link to="/update">Update</Link>
          </li>
          <li className="p-1 m-2">
            <Link to="/profile">Profile</Link>
          </li>
          </>:<div></div>}
          <li className="p-1 m-2">
          {auth? <div className="cursor-pointer" onClick={handleLogout}>LogOut({JSON.parse(auth).name})</div>:<Link to="/sign">SignUp</Link>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
