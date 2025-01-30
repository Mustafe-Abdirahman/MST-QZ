import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuizDetails = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    // Get quiz details from API or database
    fetch(`/api/quiz/${quizId}`)
      .then((response) => response.json())
      .then((data) => setQuiz(data));
  }, [quizId]);

  return (
    <div className="container">
      {quiz ? (
        <>
          <h1 className="text-3xl font-bold">{quiz.title}</h1>
          <p>{quiz.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuizDetails;
