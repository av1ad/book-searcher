import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function randomizer() {
  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
      .then(res => res.json())
      .then((books) => {
        console.log(books)
      })
  })

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1>Get A Random Book!</h1>
        <li className="border-[.5em] w-[12em] h-[19em] m-3 list-none"></li>
        <button className="bg-[#758173] text-[#d9d9d9] p-3 rounded w-48 uppercase bold">Randomize</button>
      </div>
      <Footer />
    </>
  );
}
