"use client";

import { useState, useEffect } from "react";
import Navigation from "./Navigation";

interface FlashcardProps {
  question: string;
  answer: string;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function Flashcard({
  question,
  answer,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  // sempre que o card mudar (pergunta diferente), esconde a resposta de novo
  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <div className="border border-gray-300 rounded-xl p-8">
      <div className="min-h-[220px] flex items-center justify-center text-center">
        <p className="text-xl font-bold text-gray-900 leading-relaxed">
          {showAnswer ? answer : question}
        </p>
      </div>

      <Navigation
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        middle={
          <button
            onClick={() => setShowAnswer((prev) => !prev)}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
        }
      />
    </div>
  );
}