// app/quiz/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { quizQuestions, type QuizQuestion } from "@/data/quizQuestions";
import { scenarios } from "@/data/scenarios";
import { AnimatePresence, motion } from "framer-motion";

const QUIZ_LENGTH = 7;

const shuffleArray = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const buildQuizAttempt = (): QuizQuestion[] => {
  return shuffleArray(quizQuestions).slice(0, Math.min(QUIZ_LENGTH, quizQuestions.length));
};

const QuizPage: React.FC = () => {
  const [attemptQuestions, setAttemptQuestions] = useState<QuizQuestion[]>(() => buildQuizAttempt());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [results, setResults] = useState<{ questionId: string; isCorrect: boolean; layer: string; category: string }[]>([]);

  const scenarioLookup = useMemo(() => {
    return Object.fromEntries(scenarios.map((scenario) => [scenario.id, scenario]));
  }, []);

  const totalQuestions = attemptQuestions.length;
  const currentQuestion: QuizQuestion | undefined = attemptQuestions[currentIndex];
  const currentScenario = currentQuestion ? scenarioLookup[currentQuestion.scenarioId] : undefined;
  const selectedOption = selectedOptionIndex !== null && currentQuestion ? currentQuestion.options[selectedOptionIndex] : null;
  const correctOption = currentQuestion ? currentQuestion.options[currentQuestion.correctIndex] : null;

  const layerSummary = useMemo(() => {
    const summary: Record<string, { correct: number; total: number }> = {};
    for (const result of results) {
      if (!summary[result.layer]) {
        summary[result.layer] = { correct: 0, total: 0 };
      }
      summary[result.layer].total += 1;
      if (result.isCorrect) {
        summary[result.layer].correct += 1;
      }
    }
    return summary;
  }, [results]);

  const getScoreMessage = () => {
    const percentage = totalQuestions === 0 ? 0 : score / totalQuestions;

    if (percentage >= 0.85) {
      return "You already have a strong instinct for who handles which kinds of issues. The remaining value is in seeing escalation paths and edge cases.";
    }

    if (percentage >= 0.55) {
      return "You seem comfortable with some issue types, but there are still places where city, state, district, and central responsibilities blur together.";
    }

    return "Your results suggest the app is doing exactly the job it should: showing how easy it is to send the right complaint to the wrong office.";
  };

  if (!currentQuestion && !completed) {
    return (
      <>
        <h1 className="mb-4 text-2xl font-semibold text-slate-900">Civic roles quiz</h1>
        <p className="text-sm text-slate-800">No quiz questions are configured yet.</p>
      </>
    );
  }

  const handleOptionClick = (index: number) => {
    if (selectedOptionIndex !== null || completed || !currentQuestion || !currentScenario) {
      return;
    }

    const isCorrect = index === currentQuestion.correctIndex;
    setSelectedOptionIndex(index);
    setShowExplanation(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        isCorrect,
        layer: currentScenario.layer,
        category: currentScenario.category,
      },
    ]);
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
    setAttemptQuestions(buildQuizAttempt());
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
    setResults([]);
  };

  return (
    <>
      <div className="mb-5">
        <h1 className="mb-2 text-2xl font-semibold text-slate-900">Civic roles quiz</h1>
        <p className="text-sm text-slate-700">
          Each attempt gives you {QUIZ_LENGTH} random questions. The goal is not just to get a score, but to notice which kinds of issues you instinctively send to the wrong office.
        </p>
      </div>

      {!completed && currentQuestion && currentScenario && (
        <>
          <div className="mb-4 flex items-center justify-between gap-4 text-sm text-slate-600">
            <span>Question {currentIndex + 1} of {totalQuestions}</span>
            <span>Score: {score} / {totalQuestions}</span>
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
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {currentScenario.layer}
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                  {currentScenario.category}
                </span>
              </div>

              <p className="mb-4 text-base font-medium text-slate-900">{currentQuestion.question}</p>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptionIndex === index;
                  const isCorrect = showExplanation && currentQuestion.correctIndex === index;
                  const isIncorrect = showExplanation && isSelected && currentQuestion.correctIndex !== index;

                  let baseClasses =
                    "w-full text-left rounded-md border px-3 py-2 text-sm transition-colors transition-transform duration-200 ease-out";
                  let colorClasses =
                    "border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

                  if (!showExplanation && isSelected) {
                    colorClasses = "border-blue-600 bg-blue-50 text-blue-900";
                  }

                  if (showExplanation && isCorrect) {
                    colorClasses = "border-emerald-600 bg-emerald-50 text-emerald-900";
                  } else if (showExplanation && isIncorrect) {
                    colorClasses = "border-rose-600 bg-rose-50 text-rose-900";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionClick(index)}
                      className={`${baseClasses} ${colorClasses} ${selectedOptionIndex === null ? "hover:-translate-y-0.5 hover:shadow-sm" : ""}`}
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
                      className="space-y-3 rounded-md bg-slate-50 p-4 text-sm text-slate-800"
                    >
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-md bg-white p-3 border border-slate-200">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your answer</p>
                          <p className="mt-1 font-medium text-slate-900">{selectedOption}</p>
                        </div>
                        <div className="rounded-md bg-white p-3 border border-slate-200">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Best first stop</p>
                          <p className="mt-1 font-medium text-slate-900">{correctOption}</p>
                        </div>
                      </div>

                      <div className="rounded-md bg-white p-3 border border-slate-200">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Why</p>
                        <p className="mt-1">{currentQuestion.explanation}</p>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-md bg-white p-3 border border-slate-200">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Issue type</p>
                          <p className="mt-1 text-slate-900">{currentScenario.layer} • {currentScenario.category}</p>
                        </div>
                        <div className="rounded-md bg-white p-3 border border-slate-200">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">If unresolved</p>
                          <p className="mt-1 text-slate-900">{currentScenario.secondaryAuthority}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-1">
                        <Link
                          href={`/advisor`}
                          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-100"
                        >
                          See this in Advisor
                        </Link>
                        {currentScenario.actionLinks[0] && (
                          <a
                            href={currentScenario.actionLinks[0].url}
                            target={currentScenario.actionLinks[0].url.startsWith('http') ? '_blank' : undefined}
                            rel={currentScenario.actionLinks[0].url.startsWith('http') ? 'noreferrer' : undefined}
                            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                          >
                            {currentScenario.actionLinks[0].label}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  disabled={!showExplanation}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  {currentIndex >= totalQuestions - 1 ? "Finish quiz" : "Next question"}
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
          className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Quiz completed</h2>
          <p className="mb-2 text-base text-slate-800">You scored {score} / {totalQuestions}</p>
          <p className="mb-5 text-sm text-slate-700">{getScoreMessage()}</p>

          <div className="mb-5 rounded-lg bg-slate-50 p-4">
            <p className="mb-3 text-sm font-medium text-slate-900">How your answers broke down</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(layerSummary).map(([layer, data]) => (
                <div key={layer} className="rounded-md border border-slate-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{layer}</p>
                  <p className="mt-1 text-sm text-slate-900">{data.correct} correct out of {data.total}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
            >
              Try another {QUIZ_LENGTH} questions
            </button>
            <Link
              href="/advisor"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-50"
            >
              Go to Advisor
            </Link>
            <Link
              href="/learn"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-50"
            >
              Review Learn page
            </Link>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default QuizPage;
