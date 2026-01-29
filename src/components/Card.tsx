// @ts-ignore
import useRickMorty from "../hooks/useRickMorty";

const Card = () => {
  const { personagens, inputText } = useRickMorty();

  if (!personagens) {
    return <p className="text-center text-gray-500">Carregando personagens</p>;
  }
  const texto = inputText?.toLowerCase() ?? "";

  const personagensFiltrados = personagens.filter((p: any) =>
  p.name.toLowerCase().includes(texto)
);
  return (
    <div>
      {personagensFiltrados.map((p: any) => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;