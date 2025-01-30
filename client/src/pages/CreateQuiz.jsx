import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "text") updatedQuestions[index].text = value;
    else updatedQuestions[index].options[field] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].correctAnswer = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = { title, description, questions };

    try {
      const response = await fetch("http://localhost:5000/api/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      });

      if (response.ok) {
        toast.success("Quiz created successfully!");
      } else {
        toast.error("Error creating quiz!");
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
      toast.error("Error submitting quiz!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create a New Quiz
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Quiz Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="Quiz Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="3"
            ></textarea>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Add Questions
            </h3>
            {questions.map((q, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                <label className="block font-semibold">
                  Question {index + 1}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter the question"
                  value={q.text}
                  onChange={(e) =>
                    handleQuestionChange(index, "text", e.target.value)
                  }
                  required
                />

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {q.options.map((opt, optIndex) => (
                    <div key={optIndex}>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg"
                        placeholder={`Option ${optIndex + 1}`}
                        value={opt}
                        onChange={(e) =>
                          handleQuestionChange(index, optIndex, e.target.value)
                        }
                        required
                      />
                    </div>
                  ))}
                </div>

                <select
                  className="w-full p-2 mt-2 border rounded-lg"
                  onChange={(e) =>
                    handleCorrectAnswerChange(index, e.target.value)
                  }
                  value={q.correctAnswer}
                >
                  <option value="">Select Correct Answer</option>
                  {q.options.map((opt, optIndex) => (
                    <option key={optIndex} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleAddQuestion}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg"
            >
              Add Question
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Create Quiz
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateQuiz;
