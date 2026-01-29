interface HeaderProps {
  titulo: string;
}

const Header = ({ titulo }: HeaderProps) => {
  return (
    <header className="mb-6 border-b pb-4">
      <h1 className="text-2xl font-bold text-gray-800">
        {titulo}
      </h1>
      
    </header>
  );
};

export default Header;