"use client";

import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import './styles/Flashcard.css';

interface FlashcardProps {
  question: string;
  answer: string;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

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

  
  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <div className="flashcard">
      <div className="flashcard-content">
        <p className="flashcard-text">
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
            className="answer-button"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
        }
      />
    </div>
  );
}