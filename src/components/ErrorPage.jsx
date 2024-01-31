/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="text-6xl text-gray-800 font-bold mb-2">404</h2>
        <h3 className="text-6xl text-gray-800 font-bold mb-4">
          UH OH! You're lost.
        </h3>
        <p className="italic underline text-2xl">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
      </div>
      <Link to={"/"}>
        <button className="bg-gray-500 w-44 rounded-md text-white m-5 hover:bg-gray-400 hover:text-indigo-800  font-bold h-14">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
