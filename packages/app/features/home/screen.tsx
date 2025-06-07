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
import { H1, TextLink } from 'app/design/typography'
import { PlusCircle, Mail } from '@nandorojo/iconic/src'

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
        {!isMobile && (
          <View className="flex-row  items-center justify-center gap-4">
            <Mail className="text-primary h-10 w-10" />
            <H1>Postfach</H1>
          </View>
        )}
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
                  <TextLink href={'/message/send'}>
                    <View>
                      <PlusCircle className="h-8 w-8 text-gray-600" />
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
