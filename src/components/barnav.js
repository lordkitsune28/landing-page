import React from 'react'
import {Nav, Icono, Opcion, Item} from "../styled/barnav"

export const Barnav = () => {
  return (
    <Nav>
      <div>
        <Icono><img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676532/reto1sprint3/logo_zddzpi.svg" /></Icono>
        <Opcion>
            <Item href='#'>Features</Item>
            <Item href='#'>Team</Item>
            <Item href='#'>Sign In</Item>
        </Opcion>
      </div>
    </Nav>
  )
}
