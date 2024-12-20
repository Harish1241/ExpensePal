const ChartBar = (props) => {
    const barFullHeight = `${props.percentage}% `

  return (
    <div className="m-2 mx-3 h-48 sm:min-w-0 flex-grow flex-shrink">
      <div className="mx-1 h-44 bg-white border-black rounded-full flex">
        <div className="bg-violet-500/80 backdrop-blur-md w-full rounded-full mt-auto transition-all duration-500" style={{height: barFullHeight}}></div>
      </div>
      <div className="m-1 text-xs overflow-visible font-semibold">{props.month}</div>
    </div>
  );
};

export default ChartBar;
