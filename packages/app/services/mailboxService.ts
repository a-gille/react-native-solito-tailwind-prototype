import { Email } from 'app/models/email'
import { getNumberOfAttachment } from './attachmentService'

const emails: Email[] = [
  {
    id: 1,
    date: '2025-04-23T10:00:00Z',
    sentBy: 'System-Administrator',
    message:
      'Sehr geehrte Mitarbeiterinnen und Mitarbeiter, am kommenden Wochenende...',
    attachmentCount: null,
  },
  {
    id: 2,
    date: '2025-04-24T09:30:00Z',
    sentBy: 'Projektteam Alpha',
    message:
      'Hallo zusammen, hier ist das neueste Update zur zweiten Phase unseres Projekts...',
    attachmentCount: null,
  },
  {
    id: 3,
    date: '2025-04-22T16:45:00Z',
    sentBy: 'Kundenservice',
    message:
      'Sehr geehrte Kundin/sehr geehrter Kunde, bezüglich Ihrer Anfrage...',
    attachmentCount: null,
  },
  {
    id: 4,
    date: '2025-04-21T11:20:00Z',
    sentBy: 'Personalabteilung',
    message:
      'Liebe Kolleginnen und Kollegen, wir laden Sie herzlich zu unserem diesjährigen Sommerfest ein...',
    attachmentCount: null,
  },
]

export const getAllEmails = (): Email[] => {
  emails.forEach((email) => {
    email.attachmentCount = getNumberOfAttachment(email.id)
  })
  return emails
}

export const getEmailById = (id: number): Email | undefined => {
  return emails.find((email) => email.id === id)
}
