import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
  const [promjena, setPromjena] = useState([
    { title: "Promjena1", id: 1 },
    { title: "Promjena2", id: 2 },
    { title: "Naručite", id: 3 }
  ]);
  return (
    <Context.Provider value={{ promjena }}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
