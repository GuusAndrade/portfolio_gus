import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"
import Navbar from './components/Navbar'
import React from 'react';
import SocialLinks from './components/socialLinks';

import './index.css';


function App() {
  return (
    <div className="container mx-auto p-4">
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Portfólio Gus</h1>
      
      <SocialLinks />
    </header>
    </div>
  );
}

 
export default App


