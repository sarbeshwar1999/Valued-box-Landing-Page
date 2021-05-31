import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import About from './pages/about/About ';
import Feature from './pages/feature/Feature';
import Register from './pages/register/Register';
import Services from './pages/services/Services';
import Categories from "./pages/categorious/Categories"


import './App.css';

function App() {
  return (
    <div className="app">
    
      <Header />
      <About/>
      <Feature/>
      <Register/>
      <Services/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
