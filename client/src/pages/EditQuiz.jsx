import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditQuiz = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    // Get quiz details to edit
    fetch(`/api/quiz/${quizId}`)
      .then((response) => response.json())
      .then((data) => setQuiz(data));
  }, [quizId]);

  const handleEdit = (e) => {
    e.preventDefault();
    // Update quiz in database
    fetch(`/api/quiz/${quizId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quiz),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Quiz updated successfully!");
      });
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold">Edit Quiz</h2>
      {quiz && (
        <form onSubmit={handleEdit}>
          <div className="mt-4">
            <label className="block">Quiz Title</label>
            <input
              type="text"
              className="input input-bordered"
              value={quiz.title}
              onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            />
          </div>
          <div className="mt-4">
            <label className="block">Quiz Description</label>
            <textarea
              className="textarea textarea-bordered"
              value={quiz.description}
              onChange={(e) =>
                setQuiz({ ...quiz, description: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary mt-4" type="submit">
            Update Quiz
          </button>
        </form>
      )}
    </div>
  );
};

export default EditQuiz;
