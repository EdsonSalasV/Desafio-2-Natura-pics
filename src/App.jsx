import './App.css'

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavPage from './pages/FavPage'
import NoEncontrado from './pages/NoEncontrado'
import HomePage from './pages/HomePage'
import { Context } from './context/Context'

const App = () => {
  const [photos, setPhotos] = useState([])

  const url = './src/data/data.json'

  const getPhotos = async () => {
    const response = await fetch(url)
    let { photos } = await response.json()

    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false,
    }));

    setPhotos(photos)
  }

  useEffect(() => {
    getPhotos()
  }, [])



  return (
    <div>
      <Context.Provider value={photos}>

      <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='favoritos' element={<FavPage />} />
            <Route path='*' element={<NoEncontrado />} />

          </Routes>

        </BrowserRouter>

      </Context.Provider>

    </div>
  )
}

export default App
