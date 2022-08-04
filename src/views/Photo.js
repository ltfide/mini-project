import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAxiosGet } from "../hooks/HttpRequests";
import { Link } from "react-router-dom";

export function Photo() {
   const { id } = useParams();
   const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
   let photo = useAxiosGet(url);

   let content = null;

   // response reject
   if (photo.error) {
      content = <div className="bg-red-300 p-3">There was an error please refresh or try again later.</div>;
   }

   // animation loading
   if (photo.loading) {
      content = <Loader></Loader>;
   }

   // response fullfill
   if (photo.data) {
      content = (
         <div className="w-80 bg-white rounded shadow">
            <h1 className="text-2xl text-center font-bold mb-3">{photo.data.name}</h1>
            <div>
               <img src={photo.data.images[0].imageUrl} alt={photo.data.name} />
            </div>
            <div className="font-bold text-xl mb-3 pt-3 px-3">$ {photo.data.price}</div>
            <div className="p-3">{photo.data.description}</div>
         </div>
      );
   }

   return (
      <div>
         <div className="px-3">
            <Link to="/" className="mb-3 py-2 px-6 bg-green-500 text-white rounded shadow  hover:bg-green-400">
               Back
            </Link>
         </div>
         <div className="p-3">{content}</div>
      </div>
   );
}
