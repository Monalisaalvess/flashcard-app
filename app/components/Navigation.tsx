import { ReactNode } from "react";
import './styles/navigation.css'
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
    <div className="container-navigation">
      <button 
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="navigation-btn">
              &lt; Previous
      </button>
          {middle}

      <button
          onClick = {onNext}
          disabled={!hasNext}
          className="navigation-btn">
           Next &gt;
      </button>
    </div>
  )
}