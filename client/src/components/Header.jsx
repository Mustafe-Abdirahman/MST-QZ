import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          Quiz Manager
        </Link>
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/quizzes" className="mr-4">
            Quizzes
          </Link>
          <Link
            to="/create-quiz"
            className="bg-white text-blue-600 px-3 py-1 rounded"
          >
            Create Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
