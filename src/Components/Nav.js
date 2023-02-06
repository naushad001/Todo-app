import React from 'react';


const Nav = () => {
 
  return (
    <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand"><b>TodoApp</b></a>
                <form className="d-flex">
                <input id="searchInput"className="form-control me-2" type="text"   placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
            
            </nav>
        </div>
  )
}

export default Nav
