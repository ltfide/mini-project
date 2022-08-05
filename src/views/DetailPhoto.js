import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/HttpRequests";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Error } from "../components/Error";
import { PhotoCard } from "../components/PhotoCard";

export function DetailPhoto() {
   const { id } = useParams();
   const accessKey = "222Y6Dhc7TXTPBsxg8tSzJiBDp_rjRKgZfpuj0X5Po8";
   const queryParam = new URLSearchParams();
   queryParam.append("client_id", accessKey);
   const url = `https://api.unsplash.com/photos/${id}/?${queryParam}`;
   let photo = useAxiosGet(url);

   let content = null;
   let loading = null;

   // response reject
   if (photo.error) {
      content = <Error />;
   }

   // animation loading
   if (photo.loading) {
      loading = <Loader></Loader>;
   }

   // response fullfill
   if (photo.data) {
      content = <PhotoCard data={photo.data} />;
   }

   return (
      <div className="container mx-auto px-3 mb-4">
         <Link to="/" className="py-2 px-6 bg-green-500 text-white rounded shadow  hover:bg-green-400">
            Back
         </Link>
         <div className="flex justify-center">{loading}</div>
         {content}
      </div>
   );
}
