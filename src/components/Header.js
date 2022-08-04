import React from "react";
import { Navbar } from "./Navbar";

export function Header() {
   return (
      <header className="container mx-auto p-3 flex justify-between items-center mb-4">
         <h1 className="text-green-600 text-2xl font-semibold">Mini Project</h1>
         <Navbar />
      </header>
   );
}
