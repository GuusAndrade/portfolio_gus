const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-4 px-6 flex justify-between items-center z-50 shadow-lg">
        <div className="text-white font-bold text-xl">
          Meu Portfólio
        </div>
        <ul className="flex space-x-6 text-lg font-semibold text-white">
          <li>
            <a href="#sobre" className="hover:text-gray-300 transition">Sobre Mim</a>
          </li>
          <li>
            <a href="#projeto" className="hover:text-gray-300 transition">Projetos</a>
          </li>
          <li>
            <a href="#contato" className="hover:text-gray-300 transition">Contato</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;