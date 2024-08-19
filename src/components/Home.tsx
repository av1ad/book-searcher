import { FaSearch } from "react-icons/fa";

export default function Home() {
    return (
        <div className="h-screen">
            <div>
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
                    <li className="border-[.5em] w-[13.75em] h-[22em] m-10"></li>
                    <li className="border-[.5em] w-[13.75em] h-[22em] m-10"></li>
                    <li className="border-[.5em] w-[13.75em] h-[22em] m-10"></li>
                    <li className="border-[.5em] w-[13.75em] h-[22em] m-10"></li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Search for books" />
                <button><FaSearch /></button>
            </div>
        </div>
    )
}