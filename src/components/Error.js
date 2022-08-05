import React from "react";

export function Error() {
   return (
      <div>
         <div className="bg-blue-300 mb-2 p-3">
            If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
         </div>
         <div className="bg-red-300 p-3">There was an error please refresh or try again later.</div>
      </div>
   );
}
