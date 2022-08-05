import React from "react";

export function About() {
   return (
      <div className="text-center">
         <h1 className="text-3xl text-slate-600 font-semibold mb-3">About Me</h1>

         <img
            className="w-40 rounded-full border-2 border-green-500 mx-auto"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGVM_fqDhq_eA/profile-displayphoto-shrink_800_800/0/1644889360428?e=1665014400&v=beta&t=t00-sVbBKIq1tf2gRLUpgvpGsrEw-fDQO5Eov0jjEnE"
            alt=""
         />

         <h2 className="text-2xl text-slate-500 mt-6">Hello, My name is Lutfi Dendiansyah</h2>
      </div>
   );
}
