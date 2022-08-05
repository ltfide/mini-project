import React from "react";

export function PhotoCard(props) {
   return (
      <div className="mt-4">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
               <img className="rounded-full border-2 border-green-500" src={props.data.user.profile_image.small} alt="" />
               <div>
                  <h3 className="text-slate-500 font-semibold">{props.data.user.name}</h3>
                  <p className="-mt-1 text-slate-400 font-normal text-sm">{props.data.user.location}</p>
               </div>
            </div>
            <a className="py-2 px-4 bg-white/80 rounded shadow text-slate-500 hover:bg-gray-500 hover:text-white" href={props.data.links.download + "&force=true"} download>
               Download
            </a>
         </div>
         <div className="my-5">
            <img className="block mx-auto" src={props.data.urls.regular} alt="" />
         </div>
         <div className="flex gap-12">
            <div>
               <h3 className="text-slate-600 font-semibold">Views</h3>
               <h3>{props.data.views}</h3>
            </div>
            <div>
               <h3 className="text-slate-600 font-semibold">Download</h3>
               <h3>{props.data.downloads}</h3>
            </div>
         </div>
      </div>
   );
}
