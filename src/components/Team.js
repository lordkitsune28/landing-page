import React from 'react'
import {A} from "../styled/link"

export const Team = () => {
  return (
    <div>
          <div className='row row-cols-2 mx-auto my-5 px-5'>
              <div className='col'>
                  <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676529/reto1sprint3/illustration-stay-productive_bqgn9k.png" />
              </div>
              <div className='col w-50'>
                  <h2>Stay productive, wherever you are</h2>
                  <div className="w-75">
                  <p className='my-5'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                      storage needs.</p>
                  <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                      attachments required.</p></div>
                  <A href="#">See how Fylo works</A>
              </div>
          </div>
    </div>
  )
}
