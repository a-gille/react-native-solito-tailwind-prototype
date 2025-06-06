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
import { H1, Text, TextLink } from 'app/design/typography'
import { ArrowDown } from '@nandorojo/iconic/src'

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
      <View className="flex-1">
        {!isMobile && <H1 className="text-center">Postfach</H1>}
        <View className="flex-1 flex-row px-2 pt-2">
          {!isMobile && (
            <View className="flex-[1]">
              <ResponsiveNavigation />
            </View>
          )}
          <View className="flex-[6]">
            <ScrollView>
              <Card
                title={id ?? 'Posteingang'}
                headerContent={
                  <TextLink href={'/'}>
                    <View>
                      <ArrowDown width={24} height={24} color="#0f6cbd" />
                    </View>
                  </TextLink>
                }
              >
                <MailboxTable emails={emailsData} />
              </Card>
            </ScrollView>
          </View>
        </View>
      </View>

      {isMobile && <ResponsiveNavigation />}
    </View>
  )
}
