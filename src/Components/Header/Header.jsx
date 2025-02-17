import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className=" flex justify-between  bg-gray-100 shadow-lg  h-16 pt-4.5 border-b-1  border-b-gray-300">
            <h2 className=" ml-8 font-bold text-2xl ">Navbar</h2>
            <ul className=" space-x-12 mr-8">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                
            </ul>
        </div>
    );
};

export default Header;