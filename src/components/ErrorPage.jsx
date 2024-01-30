import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className=" text-3xl text-gray-800">Somethig Went Wrong...</div>
      <Link to={"/"}>
        <button className="bg-gray-500 w-28 rounded-md text-white m-5 hover:bg-gray-400 hover:text-indigo-800  font-bold h-10">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
