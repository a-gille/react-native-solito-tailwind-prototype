import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { Attachment } from 'app/models/attachment'
import { AttachmentTableRow } from './AttachmentTableRow'
import { AttachmentTableHeader } from './AttachmentTableHeader'
import { Platform } from 'react-native'

interface Props {
  attachments: Attachment[]
}

export function AttachmentTable({ attachments }: Props) {
  const platformDesign = Platform.select({
    web: 'py-4 hover:bg-gray-100',
    default: 'py-2',
  })

  return (
    <View>
      <View>
        <AttachmentTableHeader />
        {attachments.length == 0 ? (
          <View
            className={`items-center border-b border-gray-200 ${platformDesign}`}
          >
            <Text>Keine Daten vorhanden</Text>
          </View>
        ) : (
          attachments.map((attachment) => (
            <AttachmentTableRow key={attachment.id} attachment={attachment} />
          ))
        )}
      </View>
    </View>
  )
}
