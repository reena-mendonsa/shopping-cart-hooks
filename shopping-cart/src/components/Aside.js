import React from "react";

function Aside(props) {
  let allSizes = props.arrOfSize;
  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {allSizes.map((size, i) => {
          return (
            <button
              key={size}
              onClick={(event) => props.handleSortBySize(event, size)}
              className="size"
            >
              {size}
            </button>
          );
        })}
      </div>
      <button
        className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-white font-bold"
        onClick={() => props.handleResetSort()}
      >
        Reset
      </button>
    </aside>
  );
}

export default Aside;
