import { Attachment } from 'app/models/attachment'

const attachments: Attachment[] = [
  {
    id: 1,
    date: '2025-04-23T10:05:00Z',
    name: 'wartungsplan_v1.pdf',
    comment: 'Erste Version des Wartungsplans',
    emailId: 1,
  },
  {
    id: 2,
    date: '2025-04-24T09:35:00Z',
    name: 'zwischenbericht_phase2.pdf',
    comment: 'Zwischenbericht zur Projektphase 2',
    emailId: 2,
  },
  {
    id: 3,
    date: '2025-04-24T09:40:00Z',
    name: 'präsentation_alpha.pdf',
    comment: 'Präsentation des Alpha-Teams',
    emailId: 2,
  },
  {
    id: 4,
    date: '2025-04-22T16:50:00Z',
    name: 'support_anfrage_details.pdf',
    comment: 'Zusätzliche Details zur Support-Anfrage',
    emailId: 3,
  },
  {
    id: 5,
    date: '2025-04-21T11:25:00Z',
    name: 'anmeldung_sommerfest.pdf',
    comment: 'Anmeldeformular für das Sommerfest',
    emailId: 1,
  },
  {
    id: 6,
    date: '2025-04-25T14:00:00Z',
    name: 'neues_feature_beschreibung.pdf',
    comment: 'Beschreibung des neuen Features',
    emailId: 1,
  },
]

export const getAttachments = (): Attachment[] => {
  return attachments
}

export const getAttachmentById = (id: number): Attachment[] => {
  return attachments.filter((attachments) => attachments.emailId === id)
}

export const getNumberOfAttachment = (id: number): number => {
  return attachments.filter((attachments) => attachments.emailId === id).length
}
