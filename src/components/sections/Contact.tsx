import { CircleAlert, CircleCheck, Mail, Send } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { profile } from '../../data/profile'
import { validateContact, type ContactErrors, type ContactValues } from '../../lib/validate'
import { Button, ButtonLink, GlassCard, Reveal, Section } from '../ui'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const empty: ContactValues = { name: '', email: '', message: '' }

/**
 * The site has no backend, so on a valid submit the form opens the
 * visitor's email app with the message filled in.
 * To send directly instead, swap `handleSubmit` for a call to a form
 * service such as Formspree, Web3Forms or EmailJS.
 */
export function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactValues, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'opened'>('idle')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched[e.target.name as keyof ContactValues]) setErrors(validateContact(next))
  }
  const onBlur = (e: { target: { name: string } }) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validateContact(values))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validateContact(values)
    setErrors(errs)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errs).length) {
      document.getElementById(`contact-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('opened')
  }

  const field = (name: keyof ContactValues) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': !!(touched[name] && errors[name]),
    'aria-describedby': touched[name] && errors[name] ? `contact-${name}-error` : undefined,
    className: `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:bg-white/[0.05] ${
      touched[name] && errors[name] ? 'border-rose-400/60 focus:border-rose-400' : 'border-line focus:border-violet-400/60'
    }`,
  })

  const Err = ({ name }: { name: keyof ContactValues }) =>
    touched[name] && errors[name] ? (
      <p id={`contact-${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-300">
        <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" /> {errors[name]}
      </p>
    ) : null

  return (
    <Section id="contact" eyebrow="07 · Contact" title="Let's build something together." intro="I'm open to internships, collaborations and conversations about AI and software. I'd love to hear from you.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          <GlassCard className="p-6">
            <p className="text-sm text-zinc-400">Email me directly</p>
            <p className="mt-1 break-all font-mono text-zinc-100">{profile.email}</p>
            <ButtonLink href={`mailto:${profile.email}`} external={false} className="mt-5 w-full sm:w-auto">
              <Mail className="h-4 w-4" /> Send an email
            </ButtonLink>
          </GlassCard>
          <div className="grid grid-cols-2 gap-4">
            <ButtonLink href={profile.links.linkedin} variant="ghost"><LinkedinIcon /> LinkedIn</ButtonLink>
            <ButtonLink href={profile.links.github} variant="ghost"><GithubIcon /> GitHub</ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="p-6 sm:p-8">
            <form noValidate onSubmit={handleSubmit} aria-label="Contact form" className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm text-zinc-300">Name</label>
                  <input type="text" autoComplete="name" placeholder="Your name" {...field('name')} />
                  <Err name="name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm text-zinc-300">Email</label>
                  <input type="email" autoComplete="email" placeholder="you@example.com" {...field('email')} />
                  <Err name="email" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm text-zinc-300">Message</label>
                <textarea rows={5} placeholder="What would you like to talk about?" {...field('message')} className={`${field('message').className} resize-y`} />
                <div className="flex justify-between">
                  <Err name="message" />
                  <span className="ml-auto mt-1.5 font-mono text-xs text-zinc-600">{values.message.trim().length}/2000</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button type="submit"><Send className="h-4 w-4" /> Send message</Button>
                <p role="status" aria-live="polite" className="text-sm text-zinc-400">
                  {status === 'opened' && (
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <CircleCheck className="h-4 w-4" aria-hidden="true" /> Your email app should open with the message ready to send.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  )
}
