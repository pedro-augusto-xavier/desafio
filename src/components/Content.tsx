// @ts-ignore
import useRickMorty from "../hooks/useRickMorty";

const Content = () => {
  const { inputText, setInputText, inputRef } = useRickMorty();

  return (
    <div className="flex flex-col gap-2 border-b pb-4 mb-4">
      <input
        type="text"
        ref={inputRef}
        value={inputText}
        placeholder="Digite o nome do personagem"
        className="border border-gray-400 mt-3 p-2 rounded text-black"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button 
        onClick={() => inputRef.current?.focus()} 
        className="text-xs bg-gray-200 text-black w-32 p-1 rounded"
      >
        Focar no Input
      </button>
    </div>
  );
};

export default Content;