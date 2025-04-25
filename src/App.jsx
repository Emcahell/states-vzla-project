import {useEffect, useState} from "react";
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './app/Inicio'

function App() {

  return (
    <main className='flex flex-col items-center justify-start min-h-screen font-family-roboto'>
      <Header />
      <Inicio />
      <Footer />
    </main>
  )
}

export default App
