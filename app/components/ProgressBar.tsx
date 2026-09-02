interface ProgressBarProps {
  current : number ;
  total: number ;
}
import './styles/ProgressBar.css'
export default function ProgressBar ({current, total} : ProgressBarProps) {
  const percentage = Math.round((current / total ) * 100);
    return (
          <div className="c1">
            <div className="c2">
              <div className="c3">
                <div className="bar" style={{ width: `${percentage}%` }} />
              </div>
            
              <span className="barra-porcentagem">
                {percentage}%
              </span>

            </div>
              
              <span className="total-btn">
                {current} of {total}
              </span>

          </div>
    )
}