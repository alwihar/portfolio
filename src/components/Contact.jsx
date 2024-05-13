import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

import { contact } from '../assets/index'
import { MainWrapper, MainTitle, MainText, Button } from './shared'
import useAlert from '../hooks/useAlert'
import Alert from './shared/Alert'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {alert, showAlert, hideAlert} = useAlert()
  const [form, setForm] = useState({
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,:\s@\"]+\.)+[^<>()[\]\\.,:\s@\"]{2,})$/i
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let validationErrors = {}

    if (!form.email) validationErrors.email = "Email is required"
    else if (!validateEmail(form.email)) validationErrors.email = "Invalid email address"

    if (!form.message) validationErrors.message = "Message is required"

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true)
      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: 'your website',
          to_name: 'alwi',
          from_email: form.email,
          to_email: 'alwinaharutyunyan@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsLoading(false)
        showAlert({show: true, text: 'message sent successfully!', type: 'success'})

        setTimeout(() => {
          hideAlert()
          setForm({email: '', message: ''})
        }, 2000)
      }).catch((error) => {
        setIsLoading(false)
        console.log(error)
        showAlert({show: true, text: "i didn't receive your message", type: 'danger'})
      })
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleReset = () => {
    setForm({email: '', message: ''})
    setErrors({})
  }

  return (
    <MainWrapper id="contact" customCss='relative'>
      {alert.show && <Alert {...alert}/>}
      <div className='flex flex-col sm:flex-row gap-[60px]'>
        <div className="max-w-[400px] p-[20px] sm:p-0">
          <img src={contact} alt="contact-icon"/>
          <MainTitle title="drop me a message" customCss="text-main mt-5"/>
          <MainText text="got a project in mind or simply want to say hello? drop me a message or connect with me on social media. let’s make the digital canvas colorful together!"/>
        </div>
        <div className="max-w-[550px] p-4 w-full">
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact_gradient-border p-[1px] inline-block w-full mb-6">
              <div className="contact_textarea-box">
                <input
                  className="w-full p-6 focus:outline-none resize-none bg-transparent text-main"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="don't forget your email"
                />
                <textarea
                  className="w-full p-6 focus:outline-none resize-none bg-transparent text-main"
                  name="message"
                  value={form.message}
                  required
                  onChange={handleChange}
                  placeholder="so, what do you want to tell me?"
                  rows="6"
                />
              </div>
            </div>
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            <div className="w-full flex justify-end">
              <Button
                type="reset"
                title='clear'
                style='contact_clear-button bg-transparent'
                onClick={handleReset}
              />
              <Button
                type="submit"
                title={isLoading ? 'sending' : 'send'}
                style='contact_submit-button'
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Contact