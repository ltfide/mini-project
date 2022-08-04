import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
   return (
      <nav>
         <ul className="flex gap-3 items-center">
            <li>
               <Link to="/" className="text-slate-500 hover:text-green-500 ">
                  Home
               </Link>
            </li>
            <li>
               <Link to="/about" className="text-slate-500 hover:text-green-500">
                  About
               </Link>
            </li>
         </ul>
      </nav>
   );
}
