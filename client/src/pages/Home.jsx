import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">
        Welcome to the Quiz Management System
      </h1>
      <p className="mt-4">Manage your quizzes effectively and efficiently.</p>
      <div className="mt-8">
        <Link to="/quizzes" className="btn btn-primary">
          View All Quizzes
        </Link>
      </div>
    </div>
  );
};

export default Home;
