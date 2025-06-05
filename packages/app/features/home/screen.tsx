import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { MailboxTable } from 'app/components/MailboxTable'
import { useEffect, useState } from 'react'
import { Email } from 'app/models/email'
import { getAllEmails } from 'app/services/mailboxService'

export function HomeScreen() {
  const [emailsData, setEmailsData] = useState<Email[]>([])

  useEffect(() => {
    const emailsFromService = getAllEmails()
    setEmailsData(emailsFromService)
  }, [])

  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Solito.</H1>
      <TextLink href={'/user'}>User</TextLink>
      <MailboxTable emails={emailsData}></MailboxTable>
    </View>
  )
}
