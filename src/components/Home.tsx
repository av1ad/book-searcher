import { FaSearch } from "react-icons/fa";

export default function Home() {
    return (
        <div className="h-screen">
            <div>
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
                    <li className="border-[.5em] w-[12.75em] h-[21em] m-10"></li>
                    <li className="border-[.5em] w-[12.75em] h-[21em] m-10"></li>
                    <li className="border-[.5em] w-[12.75em] h-[21em] m-10"></li>
                    <li className="border-[.5em] w-[12.75em] h-[21em] m-10"></li>
                </ul>
            </div>
            <div className="flex justify-center text-[#A9C5A0] mt-12">
                <input type="text" placeholder="Search books by title or author" className="w-[65%] bg-[#D9D9D9] bg-opacity-10 p-4 placeholder-gray-400"/>
                <button className="bg-[#D9D9D9] text-[#000] md:text-2xl sm:text-sm p-5"><FaSearch /></button>
            </div>
        </div>
    )
}