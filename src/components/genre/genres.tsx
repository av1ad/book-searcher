import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function genres() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="bg-[#D9D9D9] bg-opacity-10 my-10 mx-auto h-16 w-[90%]">
          <h1 className="text-2xl p-3 text-white">Genre</h1>
        </div>
        <div className="books">
          <ul className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 justify-items-center">
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
            <li className="border-[.5em] w-[12em] h-[19em] m-3"></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
