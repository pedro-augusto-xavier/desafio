// @ts-ignore
import { RickMortyProvider } from "./contexts/contexts/RickandMorty";
import Header from "./components/Header";
import Content from "./components/Content";
import Card from "./components/Card";

function App() {
  return (
    <RickMortyProvider>
      <main className="max-w-2xl mx-auto p-6">
        <Header titulo="Painel Administrativo Wicomm" />
        <Content />
        <Card />
      </main>
    </RickMortyProvider>
  );
}

export default App;