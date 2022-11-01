import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({ data, fetchData, loading }) => {
  // variables
  const { input } = useParams();
  let location = useLocation();
  let path = location.pathname.slice(1);
  let photos;

  // useEffect
  useEffect(() => {
    if (input) {
      console.log("render");
      fetchData(input);
    } else if (path) {
      console.log("render");
      fetchData(path);
    } else {
      console.log("render");
      fetchData("lol");
    }
  }, [path, input]);

  if (data.length > 0) {
    photos = data.map((photo) => {
      return <Photo url={photo.url_o} alt={photo.title} key={photo.id} />;
    });
  } else {
    photos = <NotFound />;
  }
  return (
    <div className="photo-container">
      {loading ? <img src="https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif" alt="loading" /> : <ul>{photos}</ul>}
    </div>
  );
};

export default PhotoContainer;
