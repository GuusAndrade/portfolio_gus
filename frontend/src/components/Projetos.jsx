const Projetos = () => {
    return (
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white p-10">
        <h1 className="text-5xl font-bold text-blue-600">Projetos</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
          Aqui estão alguns dos meus projetos mais recentes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="w-80 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Projeto 1</h3>
            <p className="text-gray-500">Descrição do projeto...</p>
          </div>
          <div className="w-80 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Projeto 2</h3>
            <p className="text-gray-500">Descrição do projeto...</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projetos;