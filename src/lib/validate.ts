export type ContactValues = { name: string; email: string; message: string }
export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(v: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  const name = v.name.trim()
  const email = v.email.trim()
  const message = v.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Name should be at least 2 characters.'
  else if (name.length > 80) errors.name = 'Name should be under 80 characters.'

  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'

  if (!message) errors.message = 'Please write a message.'
  else if (message.length < 10) errors.message = 'Message should be at least 10 characters.'
  else if (message.length > 2000) errors.message = 'Message should be under 2000 characters.'

  return errors
}
