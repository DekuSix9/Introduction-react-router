import {  useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const useDetail=useLoaderData();
    const{username,website,id}=useDetail;
    const navigate=useNavigate();

    const handleGoBack=()=>{
        navigate(-1)
    }




    return (
        <div className=" max-w-7xl m-auto border-2 border-amber-300 p-2 rounded-lg w-56 mt-20 text-center">
          <h1 className=" text-2xl font-bold">{id}</h1>
          <h1 className=" font-bold">{username}</h1>
          <h1 className=" font-bold">{website}</h1>
          <button  className="bg-green-400 w-40 h-8 rounded-lg mt-2" onClick={handleGoBack}>Go back</button>
         
        </div>
    );
};

export default UserDetails;