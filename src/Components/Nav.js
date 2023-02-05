import React,{useState} from 'react';


const Nav = () => {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand"><b>TodoApp</b></a>
                <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <input id="searchInput"className="form-control me-2" type="text" value={Name} onChange={(event) =>
                 {setSearchFilter(event.target.value)}} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
            <div className='template_container'>
              {data
              .filter((val) => {
                if(setSearchFilter == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchFilter.toLowerCase())){
                  return val;
                }
              })}
              </div>
            </nav>
        </div>
  )
}

export default Nav
