// app/quiz/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { quizQuestions, type QuizQuestion } from "@/data/quizQuestions";
import { scenarios } from "@/data/scenarios";
import { AnimatePresence, motion } from "framer-motion";

const QUIZ_LENGTH = 7;
const QUIZ_STORAGE_KEY = "civic-quiz-session-v1";

type QuizResult = {
  questionId: string;
  isCorrect: boolean;
  layer: string;
  category: string;
};

type QuizSession = {
  attemptQuestions: QuizQuestion[];
  currentIndex: number;
  selectedOptionIndex: number | null;
  showExplanation: boolean;
  score: number;
  completed: boolean;
  results: QuizResult[];
};

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

const createFreshSession = (): QuizSession => ({
  attemptQuestions: buildQuizAttempt(),
  currentIndex: 0,
  selectedOptionIndex: null,
  showExplanation: false,
  score: 0,
  completed: false,
  results: [],
});

const QuizPage: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizSession>(createFreshSession);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(QUIZ_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as QuizSession;
        if (parsed.attemptQuestions?.length) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setQuizState(parsed);
        }
      }
    } catch {
      // ignore malformed session state and start fresh
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
  }, [quizState, isHydrated]);

  const scenarioLookup = useMemo(() => {
    return Object.fromEntries(scenarios.map((scenario) => [scenario.id, scenario]));
  }, []);

  const {
    attemptQuestions,
    currentIndex,
    selectedOptionIndex,
    showExplanation,
    score,
    completed,
    results,
  } = quizState;

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

  if (!isHydrated) {
    return (
      <>
        <h1 className="mb-4 text-2xl font-semibold text-slate-900">Civic roles quiz</h1>
        <p className="text-sm text-slate-700">Loading your current quiz attempt...</p>
      </>
    );
  }

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

    setQuizState((prev) => ({
      ...prev,
      selectedOptionIndex: index,
      showExplanation: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      results: [
        ...prev.results,
        {
          questionId: currentQuestion.id,
          isCorrect,
          layer: currentScenario.layer,
          category: currentScenario.category,
        },
      ],
    }));
  };

  const handleNextQuestion = () => {
    setQuizState((prev) => {
      if (prev.currentIndex >= prev.attemptQuestions.length - 1) {
        return {
          ...prev,
          completed: true,
        };
      }

      return {
        ...prev,
        currentIndex: prev.currentIndex + 1,
        selectedOptionIndex: null,
        showExplanation: false,
      };
    });
  };

  const handleRestart = () => {
    const freshSession = createFreshSession();
    setQuizState(freshSession);
    window.sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(freshSession));
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
          <div className="mb-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="font-medium text-slate-900">Question</span> {currentIndex + 1} of {totalQuestions}
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 sm:text-right">
              <span className="font-medium text-amber-900">Score</span> {score} / {totalQuestions}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.section
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-indigo-800 ring-1 ring-indigo-200">
                  {currentScenario.category}
                </span>
              </div>

              <p className="mb-4 text-base font-medium text-slate-900">{currentQuestion.question}</p>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptionIndex === index;
                  const isCorrect = showExplanation && currentQuestion.correctIndex === index;
                  const isIncorrect = showExplanation && isSelected && currentQuestion.correctIndex !== index;

                  const baseClasses =
                    "w-full text-left rounded-lg border px-3 py-3 text-sm transition-colors transition-transform duration-200 ease-out";
                  let colorClasses =
                    "border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

                  if (!showExplanation && isSelected) {
                    colorClasses = "border-indigo-500 bg-indigo-100 text-indigo-950";
                  }

                  if (showExplanation && isCorrect) {
                    colorClasses = "border-emerald-500 bg-emerald-50 text-emerald-950";
                  } else if (showExplanation && isIncorrect) {
                    colorClasses = "border-rose-500 bg-rose-50 text-rose-950";
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
                      className="space-y-3 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-slate-800"
                    >
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-lg border border-rose-200 bg-white p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">Your answer</p>
                          <p className="mt-1 font-medium text-slate-900">{selectedOption}</p>
                        </div>
                        <div className="rounded-lg border border-emerald-200 bg-white p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Best first stop</p>
                          <p className="mt-1 font-medium text-slate-900">{correctOption}</p>
                        </div>
                      </div>

                      <div className="rounded-lg border border-sky-200 bg-white p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Why</p>
                        <p className="mt-1">{currentQuestion.explanation}</p>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-lg border border-violet-200 bg-white p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Issue type</p>
                          <p className="mt-1 text-slate-900">{currentScenario.layer} • {currentScenario.category}</p>
                        </div>
                        <div className="rounded-lg border border-amber-200 bg-white p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">If unresolved</p>
                          <p className="mt-1 text-slate-900">{currentScenario.secondaryAuthority}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-1">
                        <Link
                          href={`/advisor?scenario=${currentScenario.id}&returnTo=quiz`}
                          className="rounded-md border border-sky-300 bg-white px-4 py-2 text-sm font-medium text-sky-900 transition-colors duration-200 hover:bg-sky-50"
                        >
                          See this in Advisor
                        </Link>
                        {currentScenario.actionLinks[0] && (
                          <a
                            href={currentScenario.actionLinks[0].url}
                            target={currentScenario.actionLinks[0].url.startsWith("http") ? "_blank" : undefined}
                            rel={currentScenario.actionLinks[0].url.startsWith("http") ? "noreferrer" : undefined}
                            className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-700"
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
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
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
          className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm"
        >
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Quiz completed</h2>
          <p className="mb-2 text-base text-slate-800">You scored {score} / {totalQuestions}</p>
          <p className="mb-5 text-sm text-slate-700">{getScoreMessage()}</p>

          <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="mb-3 text-sm font-medium text-slate-900">How your answers broke down</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(layerSummary).map(([layer, data]) => (
                <div key={layer} className="rounded-md border border-white/70 bg-white p-3">
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
              className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-emerald-800"
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
