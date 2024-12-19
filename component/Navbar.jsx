import Link from 'next/link';
import React from 'react';
import "../app/globals.css";

export default function Navbar(){
  return (
    <nav className="bg-slate-600 flex justify-between p-4 text-white">
      <Link href="/">
        Crudapps
      </Link>
      <Link className='bg-slate-50 text-blue-900 p-2 px-4' href="/Addtopic">
       Add Topic
      </Link>
    </nav>
  );
};


