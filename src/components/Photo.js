import React from "react";

const Photo = ({url, title, loading}) => {
   return (
   <li>
        <img
        src={url}
        alt={title}
        />
    </li>
    )
}

export default Photo;