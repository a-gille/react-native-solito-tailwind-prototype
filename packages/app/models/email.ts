export interface Email {
  id: number
  date: string
  sentBy: string
  message: string
  attachmentCount: number | null
}
