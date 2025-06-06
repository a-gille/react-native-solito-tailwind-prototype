import { View } from 'app/design/view'
import { MailboxTable } from 'app/components/MailboxTable'
import { Card } from 'app/components/Card'
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
      <Card title="Postfach">
        <MailboxTable emails={emailsData}></MailboxTable>
      </Card>
    </View>
  )
}
