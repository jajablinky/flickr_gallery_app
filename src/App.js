import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import apiKey from "./config";
import axios from "axios";

// App Components

import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import Error404 from "./components/page404";

const App = () => {
/* State for api data collection from flickr and accounting for a loading state */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

/* Fetching Data function to be used in search fields and nav bar*/
  const fetchData = (inputWord) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputWord}&per_page=24&extras=url_s&format=json&nojsoncallback=1`
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
      <h1>search away <i>your</i> worries</h1>
      {/* Search and Nav components with props being sent unilaterally  */}
      <Search fetchData={fetchData} setLoading={setLoading} />
      <Nav fetchData={fetchData}/>

      {/* Routes for default, Nav bar pathways, search pathway, and error */}
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
      {/* Nav */}
        <Route
          path="lol"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="bebe"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="sdfsdf"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
                <Route
          path="neopets"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
                <Route
          path="elon"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
                <Route
          path="bratz"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
                <Route
          path="meme"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />
                        <Route
          path="millenium"
          element={
            <PhotoContainer
              data={data}
              loading={loading}
              fetchData={fetchData}
            />
          }
        />

        {/* Search result path */}
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

        {/* Page cannot be found error */}
        <Route path="*" element={<Error404 />} />

      </Routes>
    </div>
  );
};

export default App;
