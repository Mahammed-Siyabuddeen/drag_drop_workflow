// draggableNode.js

import { MenuIcon } from "./icons/MenuIcon";


export const DraggableNode = ({ type, label, content }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className={`${type} flex justify-between items-center px-2 h-14 min-w-16  rounded-lg shadow-md cursor-grab`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <div
        className={`  flex gap-1 items-center  `}

      >
        <span className="text-xl">
          {content}
        </span>
        <span >{label}</span>
      </div>
      <div>
        <span className="justify-end text-2xl"><MenuIcon /></span>
      </div>
    </div>
  );
};
