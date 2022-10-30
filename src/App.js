import { useState, useRef } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom"; 
import useFetch from "./UseFetch";
import apiKey from "./config";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('frog')
  const search = useRef();


  const {data, loading, error} = useFetch(`
    https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&extras=url_o&format=json&nojsoncallback=1`
  );
  
  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

  return (
    <div className="container ">
    {console.log(data)}
      <form className="search-form" onSubmit={(e) => setSearchTerm(e)}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          required
          ref={search}
        />
        <button type="submit" className="search-button">
          <svg
            fill="#fff"
            height="24"
            viewBox="0 0 23 23"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>

      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="shibas">Shibas</NavLink>
          </li>
          <li>
            <NavLink to="gross">Gross</NavLink>
          </li>
          <li>
            <NavLink to="ai">A.I.</NavLink>
          </li>
        </ul>
      </nav>

      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img
              src=""
              alt=""
            />
          </li>
          <li>
            <img
              src=''
              alt=""
            />
          </li>
          <li>
            <img
              src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
              alt=""
            />
          </li>

          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
