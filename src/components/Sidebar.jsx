import { FaHotjar, FaNewspaper, FaClock, FaStar, FaBookmark, FaBookReader, FaHeadset } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/trending-books"
                    >
                        <FaHotjar style={{ color: 'red' }} />
                        <span>Trending</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/new-releases"
                    >
                        <FaNewspaper />
                        <span>New Releases</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/upcoming-books"
                    >
                        <FaClock />
                        <span>Coming Soon</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/favorite-books"
                    >
                        <FaStar />
                        <span>Favourites</span>
                    </NavLink>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        to="/watch-later"
                    >
                        <FaBookmark />
                        <span>Watch Later</span>
                    </Link>
                </li>
                <li className="relative">
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/requested-books"
                    >
                        <FaBookReader />
                        <span>Requested Books</span>
                    </NavLink>
                    <span className="absolute top-1 right-4 text-xs bg-yellow-500 text-black py-0.4 px-1.5 rounded">Upcoming</span>
                </li>
                <li className="relative">
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/customer-support"
                    >
                        <FaHeadset />
                        <span>Customer Support</span>
                    </NavLink>
                    <span className="absolute top-1 right-4 text-xs bg-yellow-500 text-black py-0.4 px-1.5 rounded">Upcoming</span>
                </li>
            </ul>
        </aside>
    );
}
