import { View } from 'app/design/view'
import { ScrollView } from 'moti'
import { Email } from 'app/models/email'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

interface Props {
  emails: Email[]
}

export function MailboxTable({ emails }: Props) {
  return (
    <ScrollView horizontal>
      <View className="min-w-[600px]">
        <TableHeader />
        {emails.map((email) => (
          <TableRow key={email.id} email={email} />
        ))}
      </View>
    </ScrollView>
  )
}
