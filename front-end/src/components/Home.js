import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">LogOut</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Home