const colors = [
  "#6FCF97",
  "#56CCF2",
  "#2D9CDB",
  "#EB5757",
  "#F2C94C",
  "#BB6BD9",
  "#FF9F43",
  "#4D4D4D",
  "#BDBDBD",
  "#6E7B8B",
];

type Props = {
  name: string;
  color: string;
};

import { useState } from "react";

export const Tag = ({ color, name }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleDeleteClick = () => {
    // 태그 삭제 로직
  };

  return (
    <div
      className="tag"
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{name}</span>
      {isHovering && <button onClick={handleDeleteClick}>X</button>}
    </div>
  );
};
