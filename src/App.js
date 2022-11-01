import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import apiKey from "./config";
import axios from "axios";

// App Components

import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("shiba");
  }, []);

  const fetchData = (inputWord) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputWord}&per_page=24&extras=url_o&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setData(res.data.photos.photo);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  };



  return (
    <div className="container ">
      <Search fetchData={fetchData} setLoading={setLoading} />
      <Nav fetchData={fetchData}/>
      <Routes>
        <Route
          path="/"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="shiba"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="anime"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="sasuke"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="/searchbar/:input"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
