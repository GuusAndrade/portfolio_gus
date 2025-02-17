const Contato = () => {
    return (
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-purple-200 p-10">
        <h1 className="text-6xl font-bold text-blue-600 animate__animated animate__fadeIn">Contato</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center animate__animated animate__fadeIn animate__delay-1s">
          Entre em contato comigo através do e-mail:
          <a href="mailto:guustavo.andrade04@gmail.com" className="text-blue-500 font-semibold"> guustavo.andrade04@gmail.com</a>
        </p>
      </section>
    );
  };
  
  export default Contato;