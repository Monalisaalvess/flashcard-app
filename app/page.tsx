'use client'
import {useState } from 'react';
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Flashcard from "./components/Flashcard";
import {cards} from './data/flashcards'; 

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const card = cards[currentIndex];

  return (

      <main className="max-w-2xl mx-auto mt-10">
      <Header />
      <ProgressBar current={currentIndex + 1} total={cards.length} />
      <Flashcard
        question={card.question}
        answer={card.answer}
        onPrevious={() => setCurrentIndex((i) => i - 1)}
        onNext={() => setCurrentIndex((i) => i + 1)}
        hasPrevious={currentIndex > 0}
        hasNext={currentIndex < cards.length - 1}
      />
    </main>
  );
}

