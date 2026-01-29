import { useContext } from "react";
import { RickMortyContext } from "../contexts/contexts/RickandMorty";

const useRickMorty = () => {
    const context = useContext(RickMortyContext);

    if (!context) {
        throw new Error(
          
        );
    }
    return context;
};

export default useRickMorty; 