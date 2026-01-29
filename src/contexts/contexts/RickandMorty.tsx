import { createContext, useState, useEffect } from "react";

export const RickMortyContext = createContext({} as any); 

export function RickMortyProvider({ children }: { children: React.ReactNode }) {
  const [inputText, setInputText] = useState("");
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputText}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonagens(data.results || []);
      })
      .catch((err) => console.log(err));
  }, [inputText]);

  return (
    <RickMortyContext.Provider value={{ personagens, inputText, setInputText }}>
      {children}
    </RickMortyContext.Provider>
  );
}