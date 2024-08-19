import { FaSearch } from "react-icons/fa";

export default function Home() {
    return (
        <div className="h-screen">
            <div>
                <ul className="flex justify-between">
                    <li className="border-8 w-[224px] h-[350px] m-7"></li>
                    <li className="border-8 w-[224px] h-[350px] m-7"></li>
                    <li className="border-8 w-[224px] h-[350px] m-7"></li>
                    <li className="border-8 w-[224px] h-[350px] m-7"></li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Search for books" />
                <button><FaSearch /></button>
            </div>
        </div>
    )
}