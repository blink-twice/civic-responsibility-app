// app/quiz/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { quizQuestions, type QuizQuestion } from "@/data/quizQuestions";

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
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="mb-4 text-3xl font-semibold">Civic roles quiz</h1>
        <p className="text-sm text-gray-700">
          No quiz questions are configured yet.
        </p>
      </main>
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
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-semibold">Civic roles quiz</h1>

      {!completed && currentQuestion && (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Question {currentIndex + 1} of {totalQuestions}
          </div>

          <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-base font-medium text-gray-900">
              {currentQuestion.question}
            </p>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOptionIndex === index;
                const isCorrect =
                  showExplanation &&
                  currentQuestion.correctIndex === index;
                const isIncorrect =
                  showExplanation &&
                  isSelected &&
                  currentQuestion.correctIndex !== index;

                const baseClasses =
                  "w-full text-left rounded-md border px-3 py-2 text-sm transition-colors";
                let colorClasses =
                  "border-gray-300 bg-white hover:bg-gray-50 text-gray-900";

                if (!showExplanation && isSelected) {
                  colorClasses =
                    "border-blue-500 bg-blue-50 text-blue-900";
                }

                if (showExplanation && isCorrect) {
                  colorClasses =
                    "border-green-500 bg-green-50 text-green-900";
                } else if (showExplanation && isIncorrect) {
                  colorClasses =
                    "border-red-500 bg-red-50 text-red-900";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleOptionClick(index)}
                    className={`${baseClasses} ${colorClasses}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-4 rounded-md bg-gray-50 p-3 text-sm text-gray-800">
                <p className="font-medium text-gray-900">Explanation</p>
                <p className="mt-1">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Score: {score} / {totalQuestions}
              </div>
              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={!showExplanation}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {currentIndex >= totalQuestions - 1
                  ? "Finish quiz"
                  : "Next question"}
              </button>
            </div>
          </section>
        </>
      )}

      {completed && (
        <section className="mt-6 rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Quiz completed
          </h2>
          <p className="mb-4 text-base text-gray-800">
            You scored {score} / {totalQuestions}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Restart quiz
            </button>
            <Link
              href="/advisor"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              Back to advisor
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default QuizPage;