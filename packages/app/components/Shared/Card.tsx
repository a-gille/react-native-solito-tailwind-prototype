import { View } from 'app/design/view'
import { Text } from 'app/design/typography'

interface CardProps {
  title: string
  headerContent?: React.ReactNode
  children: React.ReactNode
}

export function Card({ title, headerContent, children }: CardProps) {
  return (
    <View className="mb-4 rounded-md border border-gray-200 bg-white p-4 shadow-md">
      <View className="mb-2 flex-row justify-between">
        <Text className="text-primary text-2xl font-semibold">{title}</Text>
        {headerContent && <View className="mt-2">{headerContent}</View>}
      </View>
      <View>{children}</View>
    </View>
  )
}
