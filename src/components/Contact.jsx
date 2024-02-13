import React, { useState } from 'react'

import styles from '../style'
import { contact } from '../assets/index'
import MainWrapper from './shared/MainWrapper'
import MainTitle from './shared/MainTitle'
import MainText from './shared/MainText'

const Contact = () => {
  const [formData, setFormData] = useState({
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

    if (!formData.email) validationErrors.email = "Email is required"
    else if (!validateEmail(formData.email)) validationErrors.email = "Invalid email address"

    if (!formData.message) validationErrors.message = "Message is required"

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData)
      // Here you would typically send the formData to a server or handle it as needed
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <MainWrapper id="contact">
      <div className="max-w-[400px] pr-[50px]">
        <img src={contact} alt="contact-icon"/>
        <MainTitle title="drop me a message" customCss="text-main mt-5"/>
        <MainText text="got a project in mind or simply want to say hello? drop me a message or connect with me on social media. let’s make the digital canvas colorful together!"/>
      </div>
      <div className="max-w-[550px] p-4 w-full">
        <div className="contact_gradient-border p-[1px] inline-block w-full mb-6">
          <div className="contact_textarea-box">
            <form onSubmit={handleSubmit} noValidate>
              <input
                className="w-full p-6 focus:outline-none resize-none bg-transparent text-main"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="don't forget your email"
              />
              <textarea
                className="w-full p-6 focus:outline-none resize-none bg-transparent text-main"
                name="message"
                value={formData.message}
                required
                onChange={handleChange}
                placeholder="so, what do you want to tell me?"
              />
            </form>
          </div>
        </div>
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        <div className="w-full flex justify-end">
          <button type="reset" className="contact_clear-button bg-transparent text-main">
            clear
          </button>
          <button type="submit" className="contact_submit-button bg-secondary text-main">
            send
          </button>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Contact