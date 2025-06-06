import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'

export function MailDetailScreen() {
  const { useParam } = createParam<{ id: string }>()
  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center">
      <H1>Welcome to Mail Detail {id}.</H1>
      <TextLink href={'/'}>Back</TextLink>
    </View>
  )
}
