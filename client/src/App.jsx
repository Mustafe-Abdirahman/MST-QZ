import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import QuizList from "./pages/QuizList.jsx";
import QuizDetails from "./pages/QuizDetails.jsx";
import CreateQuiz from "./pages/CreateQuiz.jsx";
import EditQuiz from "./pages/EditQuiz.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quiz/:quizId" element={<QuizDetails />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/edit-quiz/:quizId" element={<EditQuiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
