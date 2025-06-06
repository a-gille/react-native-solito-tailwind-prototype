import { View } from 'app/design/view'
import { MailboxTable } from 'app/components/Shared/MailboxTable'
import { Card } from 'app/components/Shared/Card'
import { useEffect, useState } from 'react'
import { Email } from 'app/models/email'
import { getAllEmails } from 'app/services/mailboxService'
import { createParam } from 'solito'
import { ScrollView } from 'moti'
import { Platform } from 'react-native'
import { ResponsiveNavigation } from 'app/components/Shared/ResponsiveNavigation'

export function HomeScreen() {
  const [emailsData, setEmailsData] = useState<Email[]>([])
  const { useParam } = createParam<{ id: string }>()
  const [id] = useParam('id')
  const isMobile = Platform.OS !== 'web'

  useEffect(() => {
    const emailsFromService = getAllEmails()
    setEmailsData(emailsFromService)
  }, [])

  return (
    <View className="flex-1">
      <View className="flex-1 flex-row px-2 pt-2">
        {!isMobile && (
          <View className="flex-[1]">
            <ResponsiveNavigation />
          </View>
        )}
        <View className="flex-[6]">
          <ScrollView>
            <Card title={id ?? 'Posteingang'}>
              <MailboxTable emails={emailsData} />
            </Card>
          </ScrollView>
        </View>
      </View>

      {isMobile && <ResponsiveNavigation />}
    </View>
  )
}
