import { createParam } from 'solito'
import { H1, Text, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import { useEffect, useState } from 'react'
import { Email } from 'app/models/email'
import { Platform } from 'react-native'
import { getEmailById } from 'app/services/mailboxService'
import { Attachment } from 'app/models/attachment'
import { getAttachmentById } from 'app/services/attachmentService'
import { ScrollView } from 'moti'
import { Card } from 'app/components/Shared/Card'
import { Mail } from '@nandorojo/iconic/src'
import { AttachmentTable } from 'app/components/Shared/AttachmentTable'

export function MailDetailScreen() {
  const [email, setEmail] = useState<Email>()
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const { useParam } = createParam<{ id: string }>()
  const [id] = useParam('id')
  const isMobile = Platform.OS !== 'web'

  useEffect(() => {
    if (!id || typeof id !== 'string') return
    const emailId = parseInt(id, 10)
    setEmail(getEmailById(emailId))
    setAttachments(getAttachmentById(emailId))
  }, [id])

  return (
    <View className="flex-1">
      <View className="flex-1">
        {!isMobile && (
          <View className="flex-row  items-center justify-center gap-4">
            <Mail className="text-primary h-10 w-10" />
            <H1>Nachricht</H1>
          </View>
        )}
        <View className="flex-1 flex-row px-2 pt-2">
          <View className="flex-[6]">
            <ScrollView>
              <Card title={'Angaben zur Nachricht'}>
                <View className="mb-4">
                  <Text>Datum</Text>
                  <Text className="text-primary">
                    {new Date(email?.date ?? '').toLocaleDateString()}
                  </Text>
                </View>
                <View className="mb-4">
                  <Text>Versendet von</Text>
                  <Text className="text-primary">{email?.sentBy}</Text>
                </View>
                <View className="mb-4">
                  <Text>Nachricht</Text>
                  <Text className="text-primary">{email?.message}</Text>
                </View>
                <View className="mb-6">
                  <Text>Angehängte Dokumente</Text>
                  <AttachmentTable attachments={attachments} />
                </View>
                <View className="flex-row items-center justify-between">
                  <TextLink
                    className="rounded-md border border-solid border-gray-200 px-4 py-1"
                    href={'/?id=Posteingang'}
                  >
                    Zurück
                  </TextLink>
                  <TextLink
                    className="bg-primary rounded-md px-2 py-1 text-white"
                    href={'/'}
                  >
                    Antworten
                  </TextLink>
                </View>
              </Card>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}
