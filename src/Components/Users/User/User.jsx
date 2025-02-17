/* eslint-disable react/prop-types */

const User = ({user}) => {
    const {name,email,phone}=user
    
    return (
        <div className=" border-2 border-amber-300 p-2 rounded-lg">
            <h1 className=" font-bold">{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
        </div>
    );
};

export default User;