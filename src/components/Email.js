import React, { useState } from 'react'
import "../styled/email.css"
import validator from 'validator'

export const Email = () => {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        let email = e.target.value

        if (validator.isEmail(email)) {
            console.log('Valid Email :)')
        } else {
            setEmailError('Please enter a valid email address')
        }
    }
  return (
    <div>
          <div className='contemail'>
              <h4>Get early access today</h4>
              <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                  questions, our support team would be happy to help you.</p>
                  <fom>
                  <input type="text" placeholder='example@fylo.com' id="userEmail"
                      onChange={(e) => validateEmail(e)}/>
                  
                  <button type="submit">Get Started For Free</button>
                  <span className='spawn'>{emailError}</span>
                  </fom>
        </div>
    </div>
  )
}
