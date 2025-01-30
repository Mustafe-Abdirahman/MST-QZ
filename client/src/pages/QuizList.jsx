import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Get quizzes from API or database
    fetch("/api/quizzes")
      .then((response) => response.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-4">All Quizzes</h1>
      <div>
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-item mb-4">
              <Link to={`/quiz/${quiz.id}`} className="text-xl font-bold">
                {quiz.title}
              </Link>
            </div>
          ))
        ) : (
          <p>No quizzes available.</p>
        )}
      </div>
    </div>
  );
};

export default QuizList;
