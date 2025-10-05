import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" to="/">
          <span className="brand-badge">M</span>
          MovieMate
        </Link>
        <nav className="nav-links">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/add">Add Media</Link>
        </nav>
      </div>
    </header>
  )
}
