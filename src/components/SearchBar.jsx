import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [texto,setTexto] = useState("");
    
    const handleChange = (e) =>{
        const value = e.target.value;
        setTexto(value);
        onSearch(value);
    };
  return (
    <div className="d-flex justify-content-end search-navbar">
      <nav class="navbar">
        <div class="container-fluid ">
          <form class="d-flex" role="search" onSubmit={(e)=> e.preventDefault()}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Bucar Proyecto"
              aria-label="Search"
              value={texto}
              onChange={handleChange}
            />
            <button class="btn btn-outline-info text-white" type="submit">
              Burcar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
