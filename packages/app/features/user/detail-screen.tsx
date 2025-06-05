import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'

export function UserDetailScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <H1>Welcome to User.</H1>
      <TextLink href={'/'}>Back</TextLink>
    </View>
  )
}
