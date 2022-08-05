import React from "react";
import { Link } from "react-router-dom";

export function PhotoBox(props) {
   return (
      <div className="w-full md:w-auto h-60 rounded  overflow-hidden ">
         <Link to={`/photo/${props.response.id}`} key={props.response.id}>
            <img className="w-full hover:scale-125 transition-all duration-500" src={props.response.urls.small} alt="" />
         </Link>
      </div>
   );
}
