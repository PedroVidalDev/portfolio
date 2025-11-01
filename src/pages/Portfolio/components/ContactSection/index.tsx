import { Button } from 'components/Button'
import { Title } from 'components/Title/styles'

import {
  ContactForm,
  ContactInput,
  ContactSectionContainer,
  ContactTextarea,
  ContactTextSection,
} from './styles'
import { useEffect, useState } from 'react'

export const ContactSection = () => {
  const [isMobile, setIsMobile] = useState(false)

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
        onClick={() => {}}
      />
      <ContactForm>
        <div>
          <ContactInput type='text' placeholder='Your Name' />
          <ContactInput type='text' placeholder='Your Subject' />
        </div>
        <div>
          <ContactInput type='email' placeholder='Your Email' />
          <ContactInput type='text' placeholder='Your Phone' />
        </div>
        <ContactTextarea placeholder='Your Message' />
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
          onClick={() => {}}
        />
      </ContactTextSection>
    </ContactSectionContainer>
  )
}
