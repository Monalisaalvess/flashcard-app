import { ReactNode } from "react";
 
interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  middle?: ReactNode; 
}

export default function Navigation ({
  onPrevious, 
  onNext, 
  hasPrevious,
  hasNext,
  middle,
}: NavigationProps) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-4">
      <button 
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="text-sm font-medium #e83e78 disabled:text-gray-300 disabled:cursor-not-allowed hover:#ff6fa3 transition-colors whitespace-nowrap  flex items-center gap-2   border #ffd6e5 rounded-full px-1 py-1">
              &lt; Previous
      </button>
          {middle}

      <button
          onClick = {onNext}
          disabled={!hasNext}
          className="text-sm font-medium #e83e78 disabled:text-gray-300 disabled:cursor-not-allowed hover:#ff6fa3 transition-colors whitespace-nowrap  flex items-center gap-2   border #ffd6e5 rounded-full px-1 py-1">
           Next &gt;
      </button>
    </div>
  )
}