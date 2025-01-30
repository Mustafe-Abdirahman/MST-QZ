import pool from "../config/db.js";

export const createQuiz = async (title, description) => {
  const [result] = await pool.execute(
    "INSERT INTO quizzes (title, description) VALUES (?, ?)",
    [title, description]
  );
  return result.insertId; // Return quiz ID
};

export const createQuestion = async (quizId, text) => {
  const [result] = await pool.execute(
    "INSERT INTO questions (quiz_id, question_text) VALUES (?, ?)",
    [quizId, text]
  );
  return result.insertId; // Return question ID
};

// Create options for each question
export const createOption = async (questionId, optionText, isCorrect) => {
  await pool.execute(
    "INSERT INTO options (question_id, option_text, is_correct) VALUES (?, ?, ?)",
    [questionId, optionText, isCorrect]
  );
};
