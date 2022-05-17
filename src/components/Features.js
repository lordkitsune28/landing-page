import React from 'react'
import { Imagen, Titulo, P, Boton } from "../styled/Features"

export const Features = () => {
  return (
    <div className='w-100 text-center my-5'>
        <Imagen><img className='w-75 mx-auto' src="https://res.cloudinary.com/donoutoby/image/upload/v1646676543/reto1sprint3/illustration-intro_c1oavp.png" /></Imagen>
        
          <div>
              <Titulo><h2>All your files in one secure location, accessible anywhere.</h2></Titulo>

              <P><p>Fylo stores all your most important files in one secure location. Access them wherever
                  you need, share and collaborate with friends family, and co-workers.</p>
                  
          <Boton>Get Started</Boton>
                  </P>
          </div>
    </div>
  )
}
