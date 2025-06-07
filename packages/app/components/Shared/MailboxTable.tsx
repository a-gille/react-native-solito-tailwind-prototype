import { View } from 'app/design/view'
import { Email } from 'app/models/email'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

interface Props {
  emails: Email[]
}

export function MailboxTable({ emails }: Props) {
  return (
    <View>
      <View>
        <TableHeader />
        {emails.map((email) => (
          <TableRow key={email.id} email={email} />
        ))}
      </View>
    </View>
  )
}
