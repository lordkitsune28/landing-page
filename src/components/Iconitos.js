import React from 'react'

export const Iconitos = () => {
  return (
    <div className='w-100 text-center my-5 py-5'>
          <div className='row row-cols-2 w-75 mx-auto my-5'>
              <div className='col w-50 text-center my-5'>
                  <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676527/reto1sprint3/icon-access-anywhere_whmcnn.svg" />
                  <h3 className='fs-5'>Access your files, anywhere</h3>
                  <div className='w-75 mx-auto'><p>The ability to use a smartphone, tablet, or computer to access your account means your
                      files follow you everywhere.</p></div>
              </div>
              <div className='col w-50 text-center my-5'>
                  <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676529/reto1sprint3/icon-security_hp7rof.svg" />
                  <h3 className='fs-5'>Security you can trust</h3>
                  <div className='w-75 mx-auto'><p>2-factor authentication and user-controlled encryption are just a couple of the security
                      features we allow to help secure your files.</p></div>
              </div>
              <div className='col w-50 text-center my-5'>
                  <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676529/reto1sprint3/icon-collaboration_vj5d3d.svg" />
                  <h3 className='fs-5'>Real-time collaboration</h3>
                  <div className='w-75 mx-auto'><p>Securely share files and folders with friends, family and colleagues for live collaboration.
                      No email attachments required.</p></div>
              </div>
              <div className='col w-50 text-center my-5'>
                  <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676528/reto1sprint3/icon-any-file_sp3rmp.svg" />
                  <h3 className='fs-5'>Store any type of file</h3>
                  <div className='w-75 mx-auto'><p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                      file types to be securely stored and shared.</p></div>
              </div>
          </div>
    </div>
  )
}
