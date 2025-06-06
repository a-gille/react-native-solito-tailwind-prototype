import { Email } from 'app/models/email'
import { View } from 'app/design/view'
import { Text, TextLink } from 'app/design/typography'
import { Platform } from 'react-native'
import { Eye } from '@nandorojo/iconic/src'

interface Props {
  email: Email
}

export function TableRow({ email }: Props) {
  const platformDesign = Platform.select({
    web: 'py-4 hover:bg-gray-100',
    default: 'py-2',
  })

  return (
    <View
      className={`flex-row items-center border-b border-gray-200 ${platformDesign}`}
    >
      <Text className="flex-[2]">
        {new Date(email.date).toLocaleDateString()}
      </Text>
      <Text className="flex-[3]">{email.sentBy}</Text>
      <Text className="flex-[2] text-right">{email.attachmentCount}</Text>
      <View className=" flex-[1] items-center">
        <TextLink href={`/postfach/message?id=${email.id}`}>
          <Eye className="color-black h-6 w-6" />
        </TextLink>
      </View>
    </View>
  )
}
