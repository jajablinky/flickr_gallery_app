import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({ data, fetchData, loading }) => {
  // declaring variables for fetching data
  const { input } = useParams();
  let location = useLocation();
  let path = location.pathname.slice(1);
  let photos;

  useEffect(() => {
    if (input) {
      fetchData(input);
    } else if (path) {
      fetchData(path);
    } else {
      /* defaults back to this if nothing is searched */
      fetchData("lol");
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, input]);

/* 
Sending all props down to all 24 images iterating with map method to be displayed in their own Photo component
OR 
displays Not Found component if no images can be found 
*/
  if (data.length > 0) {
    photos = data.map((photo) => {
      return <Photo url={photo.url_s} alt={photo.title} key={photo.id} />;
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
