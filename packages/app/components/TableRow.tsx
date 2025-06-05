import {
  View as RNView,
  Text as RNText,
  Pressable as RNPressable,
} from 'react-native'
import { Email } from 'app/models/email'
import { useRouter } from 'solito/router'
import { styled } from 'nativewind'

export const View = styled(RNView)
export const Text = styled(RNText)
export const Pressable = styled(RNPressable)

interface Props {
  email: Email
}

export function TableRow({ email }: Props) {
  const router = useRouter()

  return (
    <View className="flex-row items-center border-b border-gray-200 px-4 py-3">
      <Text className="flex-1">
        {new Date(email.date).toLocaleDateString()}
      </Text>
      <Text className="flex-1">{email.sentBy}</Text>
      <Text className="flex-1 text-right">{email.attachmentCount}</Text>
      <Pressable
        onPress={() => router.push(`/postfach/message?id=${email.id}`)}
        className="h-12 w-12 items-center justify-center"
        accessibilityLabel="Details anzeigen"
      >
        <Text>TBD Button</Text>
      </Pressable>
    </View>
  )
}
