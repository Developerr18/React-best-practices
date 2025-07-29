import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ itemsData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = itemsData.map((item, index) => {
    const isExpanded = index === activeIndex;
    const icons = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div className="border-b" key={item.id}>
        <div
          className="text-2xl flex p-3 bg-gray-100 items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {icons}
          {item.label}
        </div>
        {isExpanded && <p className="bg-white">{item.content}</p>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
