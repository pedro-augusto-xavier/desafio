import { createContext, useState, useEffect } from "react";

export const RickMortyContext = createContext({} as any); 

export function RickMortyProvider({ children }: { children: React.ReactNode }) {
  const [inputText, setInputText] = useState("");
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPersonagens(data.items || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <RickMortyContext.Provider value={{ personagens, inputText, setInputText }}>
      {children}
    </RickMortyContext.Provider>
  );
}