/* eslint-disable @typescript-eslint/no-unused-vars */
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'

import { Button } from 'components/Button'
import { Title } from 'components/Title/styles'

import {
  ContactForm,
  ContactInput,
  ContactSectionContainer,
  ContactTextarea,
  ContactTextSection,
} from './styles'
import { toastEmmiter } from 'utils/toast'

export const ContactSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (
      !formData.name ||
      !formData.subject ||
      !formData.email ||
      !formData.message
    ) {
      toastEmmiter('Please fill in all required fields.', 'error')
      return
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (_response) => {
          toastEmmiter('Message sent successfully!', 'success')
          setFormData({
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: '',
          })
        },
        (_err) => {
          toastEmmiter('Failed to send the message, please try again.', 'error')
        },
      )
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 512)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ContactSectionContainer>
      <Button
        label='Submit message'
        type='primary'
        hide={!isMobile}
        onClick={handleSubmit}
      />
      <ContactForm onSubmit={handleSubmit}>
        <div>
          <ContactInput
            type='text'
            name='name'
            placeholder='Your Name *'
            value={formData.name}
            onChange={handleInputChange}
          />
          <ContactInput
            type='text'
            name='subject'
            placeholder='Your Subject *'
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <ContactInput
            type='email'
            name='email'
            placeholder='Your Email *'
            value={formData.email}
            onChange={handleInputChange}
          />
          <ContactInput
            type='text'
            name='phone'
            placeholder='Your Phone'
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <ContactTextarea
          name='message'
          placeholder='Your Message *'
          value={formData.message}
          onChange={handleInputChange}
        />
      </ContactForm>
      <ContactTextSection>
        <Title>
          <span>Don't</span> be shy! <br /> Contact Me
        </Title>
        <p>
          Feel free to reach out for collaborations or just a friendly hello!
          I'm always open to discussing new projects and opportunities.
        </p>
        <Button
          label='Submit message'
          type='primary'
          hide={isMobile}
          onClick={handleSubmit}
        />
      </ContactTextSection>
    </ContactSectionContainer>
  )
}
