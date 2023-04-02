import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Galeria = () => {

    const photos = useContext(Context)

  return (
    <div >
      <div className='row'>
      {photos.map(photos =>(
        <div className='col mb-3' key={photos.id}>
        <img src={photos.src} alt='' />
        <button className='btn btn-success mt-1'>Favorito</button>
        </div>
      ))}
      </div>
    </div>
  )
}



export default Galeria
