export interface Card {
  question: string;
  answer: string;
}

export const cards: Card[] = [
  {
    question: "What is the difference between Server Components and Client Components in Next.js?",
    answer:
      "Server Components render on the server and send only HTML to the browser, with no JS shipped for them; they can't use hooks like useState or browser APIs. Client Components (marked with 'use client') render interactively in the browser and can use state, effects, and event handlers.",
  },
  {
    question: "What does the 'use client' directive do?",
    answer:
      "It marks a file (and everything it imports) as a Client Component, telling Next.js to send its JavaScript to the browser so it can be interactive, instead of rendering it only on the server.",
  },
  {
    question: "How does file-based routing work in the Next.js App Router?",
    answer:
      "Routes are defined by folders inside the 'app' directory. Each folder maps to a URL segment, and a 'page.tsx' file inside it defines the UI for that route. Special files like 'layout.tsx' and 'loading.tsx' add shared UI and states.",
  },
  {
    question: "What is the purpose of 'layout.tsx' in Next.js?",
    answer:
      "It defines UI that is shared across multiple pages (like a header or navigation) and wraps its child routes. Layouts preserve state and don't re-render when navigating between pages that share them.",
  },
];