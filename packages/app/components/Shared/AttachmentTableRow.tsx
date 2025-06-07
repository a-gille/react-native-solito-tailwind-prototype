import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { Platform } from 'react-native'
import { Attachment } from 'app/models/attachment'

interface Props {
  attachment: Attachment
}

export function AttachmentTableRow({ attachment }: Props) {
  const platformDesign = Platform.select({
    web: 'py-4 hover:bg-gray-100',
    default: 'py-2 ',
  })

  return (
    <View
      className={`flex-row items-center gap-2 border-b border-gray-200 ${platformDesign}`}
    >
      <Text className="flex-[1]">
        {new Date(attachment.date).toLocaleDateString()}
      </Text>
      <Text className="flex-[1]">{attachment.name}</Text>
      <Text className="flex-[1]">{attachment.comment}</Text>
    </View>
  )
}
