interface ProgressBarProps {
  current : number ;
  total: number ;
}

export default function ProgressBar ({current, total} : ProgressBarProps) {
  const porcentage = Math.round((current / total ) * 100);
    return (
           <div className="flex items-center gap-4 mb-4 ">
      <div className="flex-1 flex items-center gap-2 border #ffd6e5 rounded-full px-1 py-1">
        <div className="flex-1 #ffd6e5 rounded-full h-3 overflow-hidden">
          <div
            className=" #ffd6e5 h-full rounded-full transition-all duration-300"
            style={{ width: `${porcentage}%` }}
          />
        </div>
        <span className="text-sm font-medium #e83e78 pr-2">
          {porcentage}%
        </span>
      </div>
      <span className="text-sm font-medium #e83e78 whitespace-nowrap  flex items-center gap-2   border #ffd6e5 rounded-full px-1 py-1">
        {current} of {total}
      </span>
    </div>
    )
}