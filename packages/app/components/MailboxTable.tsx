import { View } from 'app/design/view'
import { ScrollView } from 'moti'
import { Email } from 'app/models/email'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import { Platform } from 'react-native'

interface Props {
  emails: Email[]
}

export function MailboxTable({ emails }: Props) {
  const isWeb = Platform.OS === 'web'

  return (
    <ScrollView horizontal>
      <View className={isWeb ? 'min-w-[1000px]' : 'min-w-[600px]'}>
        <TableHeader />
        {emails.map((email) => (
          <TableRow key={email.id} email={email} />
        ))}
      </View>
    </ScrollView>
  )
}
