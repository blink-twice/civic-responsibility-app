// app/quiz/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { quizQuestions, type QuizQuestion } from "@/data/quizQuestions";
import { AnimatePresence, motion } from "framer-motion";

const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  const totalQuestions = quizQuestions.length;
  const currentQuestion: QuizQuestion | undefined =
    quizQuestions[currentIndex];

  if (!currentQuestion && !completed) {
    return (
      <>
        <h1 className="mb-4 text-2xl font-semibold text-slate-900">
          Civic roles quiz
        </h1>
        <p className="text-sm text-slate-800">
          No quiz questions are configured yet.
        </p>
      </>
    );
  }

  const handleOptionClick = (index: number) => {
    if (selectedOptionIndex !== null || completed || !currentQuestion) {
      return;
    }

    setSelectedOptionIndex(index);
    setShowExplanation(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex >= totalQuestions - 1) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOptionIndex(null);
    setShowExplanation(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <>
      <h1 className="mb-3 text-2xl font-semibold text-slate-900">
        Civic roles quiz
      </h1>

      {!completed && currentQuestion && (
        <>
          {/* Progress text stays static, only the card animates */}
          <div className="mb-4 text-sm text-slate-600">
            Question {currentIndex + 1} of {totalQuestions}
          </div>

          <AnimatePresence mode="wait">
            <motion.section
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="mb-4 text-base font-medium text-slate-900">
                {currentQuestion.question}
              </p>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptionIndex === index;
                  const isCorrect =
                    showExplanation && currentQuestion.correctIndex === index;
                  const isIncorrect =
                    showExplanation &&
                    isSelected &&
                    currentQuestion.correctIndex !== index;

                  let baseClasses =
                    "w-full text-left rounded-md border px-3 py-2 text-sm transition-colors transition-transform duration-200 ease-out";
                  let colorClasses =
                    "border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

                  if (!showExplanation && isSelected) {
                    colorClasses =
                      "border-blue-600 bg-blue-50 text-blue-900";
                  }

                  if (showExplanation && isCorrect) {
                    colorClasses =
                      "border-emerald-600 bg-emerald-50 text-emerald-900";
                  } else if (showExplanation && isIncorrect) {
                    colorClasses =
                      "border-rose-600 bg-rose-50 text-rose-900";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionClick(index)}
                      className={`${baseClasses} ${colorClasses} ${
                        selectedOptionIndex === null
                          ? "hover:-translate-y-0.5 hover:shadow-sm"
                          : ""
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      key="explanation"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="rounded-md bg-slate-50 p-3 text-sm text-slate-800"
                    >
                      <p className="font-medium text-slate-900">
                        Explanation
                      </p>
                      <p className="mt-1">{currentQuestion.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Score: {score} / {totalQuestions}
                </div>
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  disabled={!showExplanation}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  {currentIndex >= totalQuestions - 1
                    ? "Finish quiz"
                    : "Next question"}
                </button>
              </div>
            </motion.section>
          </AnimatePresence>
        </>
      )}

      {completed && (
        <motion.section
          key="quiz-completed"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-6 rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm"
        >
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Quiz completed
          </h2>
          <p className="mb-4 text-base text-slate-800">
            You scored {score} / {totalQuestions}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
            >
              Restart quiz
            </button>
            <Link
              href="/advisor"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-50"
            >
              Back to advisor
            </Link>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default QuizPage;