import React from 'react';
import { Blog , Footer, Header, InfoGPT3, Possibility, Features} from './Containers';
import {Brand, Cta, Navbar} from './Components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <InfoGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App