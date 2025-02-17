import { useLoaderData } from "react-router-dom";
import User from "./User/User";

const Users = () => {

    const Users=useLoaderData()
    return (
        <div className=" max-w-7xl m-auto mt-4">
            <h1 className=" text-2xl font-bold">All Users</h1>
            <div className=" grid grid-cols-3 gap-6 mt-3">
                {
                Users.map(user=><User key={user.id} user={user}></User>)
                }
               
            </div>
        </div>
    );
};

export default Users;