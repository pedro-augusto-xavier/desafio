// @ts-ignore
import useRickMorty from "../hooks/useRickMorty";

const Card = () => {
  const { personagens } = useRickMorty();

  if (!personagens) {
    return <p className="text-center text-gray-500">Carregando personagens</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {personagens.map((p: any) => (
        <div key={p.id} className="border p-4 rounded-lg flex items-center gap-4 bg-white shadow-sm">
          <img src={p.image} alt={p.name} className="w-16 h-16 rounded-full" />
          <p className="font-bold text-black">{p.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;