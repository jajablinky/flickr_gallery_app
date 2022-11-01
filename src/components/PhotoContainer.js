import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Photo from "./Photo";

const PhotoContainer = ( {data, fetchData, loading}  ) => {
    // variables
    const { input } = useParams();
    let location = useLocation();
    let path = location.pathname.slice(1);

    // useEffect
    useEffect(() => {
        if (input) {
            fetchData(input);
        } else if (path) {
            fetchData(path);
        } else {
            fetchData('shiba')
        }
    },[fetchData, path , input]);

    let photos = data.map((photo) => {
        return (
        <Photo 
            url={photo.url_o}
            alt={photo.title}
            key={photo.id}
        />
            )
    });

    return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
};

export default PhotoContainer;