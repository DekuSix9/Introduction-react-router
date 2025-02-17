import { useRouteError,Link } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h2 className="text-4xl font-bold text-red-500">Oops!!</h2>
            <h3 className="text-2xl text-gray-600">{error.statusText||error.message} </h3>
            {
                error.status===404 &&  <div>
                    <h3>page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Go back</button></Link>
               

                </div>
            }
        </div>
    );
};

export default ErrorPage;
