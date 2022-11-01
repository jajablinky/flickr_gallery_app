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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


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
      <h1>search away <i>your</i> worries</h1>
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
