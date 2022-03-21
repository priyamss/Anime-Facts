import React from 'react'
import ListItems from './components/ListItems'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DBZ from './components/DBZ'
import About from './components/About'
import Naruto from './components/Naruto'
import OnePiece from './components/OnePiece'
import Demon from './components/Demon'
import AOT from './components/AOT'
import Kaiken from './components/Kaiken'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListItems/>}/>
        <Route path="/dbz" element={<DBZ/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/naruto" element={<Naruto/>}/>
        <Route path="/onepiece" element={<OnePiece/>}/>
        <Route path="/demonslayer" element={<Demon/>}/>
        <Route path="aot" element={<AOT/>}/>
        <Route path="/kaiken" element={<Kaiken/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

