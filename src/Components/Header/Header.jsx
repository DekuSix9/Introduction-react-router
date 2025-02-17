import { Link, NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className=" flex justify-between  bg-gray-100 shadow-lg  h-16 pt-4.5 border-b-1  border-b-gray-300">
            <h2 className=" ml-8 font-bold text-2xl ">Navbar</h2>
            <ul className=" space-x-12 mr-8">
                
                <Link to="/">Home</Link>
                <NavLink to="/users" className={({ isActive }) => isActive ? "underline text-blue-600 font-bold"
                 : "text-gray-700 hover:text-blue-500"}>Users</NavLink>

                <NavLink  to="/about" className={({ isActive }) => isActive ? "underline text-blue-600 font-bold"
                 : "text-gray-700 hover:text-blue-500"}>About</NavLink >
                <NavLink  to="/contact" className={({ isActive }) => isActive ? "underline text-blue-600 font-bold"
                 : "text-gray-700 hover:text-blue-500"}>Contact Us</NavLink >
                
            </ul>
        </div>
    );
};

export default Header;