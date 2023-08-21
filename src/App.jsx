import React from 'react'
import './App.css'
import ImageCard from './Components/ImageCards'
import ImageCardDetails from './Components/ImageCardDetails'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes className='sm:m-4 md:m-16 '>
      <Route path='/' element={ <ImageCard />}/>
      <Route path='/detailPage' element={ <ImageCardDetails/>}/>
    </Routes>
  )
}

export default App;