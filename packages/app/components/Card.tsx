import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

type CardProps = {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <View className="mb-4 rounded-md bg-white p-4 shadow-md">
      <Text className="text-primary mb-2 text-lg font-semibold">{title}</Text>
      <View>{children}</View>
    </View>
  )
}
