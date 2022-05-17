import React from 'react'
import { Targetas, Conte, Img, Image } from "../styled/Testigos"

export const Testigos = () => {
    return (
        <div className='w-100 my-5'>
            <Conte className='mx-auto'>
                <Image><img src="https://res.cloudinary.com/donoutoby/image/upload/v1646676527/reto1sprint3/bg-quotes_wyixgx.png" /></Image>
                <div className='row row-cols-3 position-absolute'>
                    <Targetas className='col'>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.</p>
                        <div className='row row-cols-2'>
                            <Img className="col" src="https://res.cloudinary.com/donoutoby/image/upload/v1646676643/reto1sprint3/profile-1_onmjfl.jpg" />
                            <div className="col">
                                <h6>Satish Patel</h6>
                                <p>Founder y CEO, Huddle</p>
                            </div>
                        </div>
                    </Targetas>

                    <Targetas className='col'>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.</p>
                        <div className='row row-cols-2'>
                            <Img className="col" src="https://res.cloudinary.com/donoutoby/image/upload/v1646676556/reto1sprint3/profile-2_lkep45.jpg" />
                            <div className="col">
                                <h6>Bruce McKenzie</h6>
                                <p>Founder y CEO, Huddle</p>
                            </div>
                        </div>
                    </Targetas>

                    <Targetas className='col'>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                            become a well-oiled collaboration machine.</p>
                        <div className='row row-cols-2'>
                            <Img className="col" src="https://res.cloudinary.com/donoutoby/image/upload/v1646676527/reto1sprint3/profile-3_uyxs8s.jpg" />
                            <div className="col">
                                <h6>Iva Boyd</h6>
                                <p>Founder y CEO, Huddle</p>
                            </div>
                        </div>
                    </Targetas>
                </div>
            </Conte>
        </div>

    )
}
