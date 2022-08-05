import React from "react";
import { useAxiosGet } from "../hooks/HttpRequests";
import Loader from "../components/Loader";
import { Error } from "../components/Error";
import { PhotoBox } from "../components/PhotoBox";

export function Gallery() {
   const accessKey = "222Y6Dhc7TXTPBsxg8tSzJiBDp_rjRKgZfpuj0X5Po8";
   const queryParam = new URLSearchParams();
   queryParam.append("client_id", accessKey);
   queryParam.append("query", "computer");
   queryParam.append("per_page", 20);
   const url = `https://api.unsplash.com/search?query=computer&${queryParam}`;
   let photos = useAxiosGet(url);

   let content = null;
   let loading = null;

   // response reject
   if (photos.error) {
      content = <Error />;
   }

   // animation loading
   if (photos.loading) {
      loading = <Loader />;
   }

   // response fullfill
   if (photos.data) {
      content = photos.data.photos.results
         .map((photo) => photo)
         .map((data) => {
            return <PhotoBox response={data} />;
         });
   }

   return (
      <div className="container mx-auto p-3">
         <h1 className="text-center text-slate-600 text-3xl font-semibold mb-4">Gallery</h1>
         <div className="flex justify-center">{loading}</div>
         <div className="flex flex-wrap gap-4">{content}</div>
      </div>
   );
}
