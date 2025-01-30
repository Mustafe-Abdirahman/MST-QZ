import express from "express";
import {
  createQuiz,
  createQuestion,
  createOption,
} from "../models/quizModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description, questions } = req.body;

  try {
    const quizId = await createQuiz(title, description);

    for (const question of questions) {
      const questionId = await createQuestion(quizId, question.text);

      for (const option of question.options) {
        const isCorrect = option === question.correctAnswer;
        await createOption(questionId, option, isCorrect);
      }
    }

    res.status(201).json({ message: "Quiz created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
