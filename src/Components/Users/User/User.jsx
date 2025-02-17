/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {name,email,phone,id}=user
    const navigate=useNavigate()


    const handleShowDetail=()=>{
        navigate(`/users/${id}`)
    }

    
    
    return (
        <div className=" border-2 border-amber-300 p-2 rounded-lg">
            <h1 className=" font-bold">{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <Link to={`/users/${id}`}><button className=" bg-blue-400 w-32 h-8 rounded-lg mt-2">User Details</button></Link>
            <button  className="bg-green-400 w-40 h-8 rounded-lg mt-2 ml-2" onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default User;