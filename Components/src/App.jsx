import Accordion from "./components/Accordion";

export default function App() {
  const data = [
    {
      id: 1,
      label: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, reusable components.",
    },
    {
      id: 2,
      label: "What is a component?",
      content:
        "A component is a reusable piece of UI that can be nested, managed, and handled independently in a React application.",
    },
    {
      id: 3,
      label: "What is JSX?",
      content:
        "JSX stands for JavaScript XML. It allows you to write HTML in React and makes the code easier to understand and debug.",
    },
    {
      id: 4,
      label: "What are props in React?",
      content:
        "Props are inputs to a React component. They are passed down from parent to child and are read-only.",
    },
    {
      id: 5,
      label: "What is state in React?",
      content:
        "State is a built-in object that stores property values that belong to the component. When the state object changes, the component re-renders.",
    },
  ];

  return <Accordion itemsData={data} />;
}
