import { useLoaderData } from "react-router-dom";

const Users = () => {

    const Users=useLoaderData()
    return (
        <div className=" max-w-7xl m-auto">
            <h1>Users Page:{Users.length}</h1>
        </div>
    );
};

export default Users;