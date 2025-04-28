import {useEffect, useState} from "react";
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './app/Inicio'
import Search from "./app/Search";

function App() {

  return (
    <main className='flex flex-col items-center justify-start min-h-screen font-family-roboto'>
      <Header />
      <Search />
      <Footer />
    </main>
  )
}

export default App
