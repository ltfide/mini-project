import React from "react";
import Loader from "../components/Loader";
import { PhotoCard } from "../components/PhotoCard";
import { useAxiosGet } from "../hooks/HttpRequests";

export function Home() {
   const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=6`;
   let products = useAxiosGet(url);

   let content = null;
   let loading = null;

   // response reject
   if (products.error) {
      content = (
         <div>
            <div className="bg-blue-300 mb-2 p-3">
               If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">There was an error please refresh or try again later.</div>
         </div>
      );
   }

   // animation loading
   if (products.loading) {
      loading = <Loader></Loader>;
   }

   // response fullfill
   if (products.data) {
      content = products.data.map((product) => (
         <div key={product.id} className="">
            <PhotoCard product={product} />
         </div>
      ));
   }

   return (
      <div className="container mx-auto p-3 relative">
         <h1 className="text-center text-slate-600 text-3xl font-semibold mb-4">All Photos</h1>
         <div className="absolute top-4 right-4">{loading}</div>
         <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4">{content}</div>
      </div>
   );
}
