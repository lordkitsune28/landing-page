import React from 'react'
import "../styled/footer.css"
import { Email } from './Email'

export const Footer = () => {
    return (
        <div className='footercont pt-5'>
            <div className='mt-5 pt-5'>
                <Email />
                <div className='footer'>
                    <img className='mt-5 pt-5' src='https://res.cloudinary.com/donoutoby/image/upload/v1646676532/reto1sprint3/logo_zddzpi.svg' />
                    <div className='mt-5 row row-cols-5'>
                        <div className='col'>
                            <img className='d-inline-block' src="https://res.cloudinary.com/donoutoby/image/upload/v1646676528/reto1sprint3/icon-location_ga1f6c.svg" />
                            <p className='d-inline-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua</p>
                        </div>
                        <div className='col'>
                            <div>
                                <img className='d-inline-block me-1' src="https://res.cloudinary.com/donoutoby/image/upload/v1646676530/reto1sprint3/icon-phone_lman1m.svg" />
                                <p className='d-inline-block me-1'>+1-543-123-4567</p>
                            </div>
                            <div>
                                <img className='d-inline-block me-1' src="https://res.cloudinary.com/donoutoby/image/upload/v1646676528/reto1sprint3/icon-email_qeyhy6.svg" />
                                <p className='d-inline-block me-1'>example@fylo.com</p>
                            </div>
                        </div>
                        <div className='col'>
                            <p>About Us</p>
                            <p>Jobs</p>
                            <p>Press</p>
                            <p>Blog</p>
                        </div>
                        <div className='col'>
                            <p>Contact Us</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                        </div>
                        <div className='col'>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646893598/reto1sprint3/f_edhfba.png" />
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646893598/reto1sprint3/t_c00lu8.png" />
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1646893598/reto1sprint3/i_mfsmnt.png" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
