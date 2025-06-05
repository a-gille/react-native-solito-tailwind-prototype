import { View } from 'app/design/view'
import { Text } from 'app/design/typography'

export function TableHeader() {
  return (
    <View className="flex-row border-b border-gray-300 bg-gray-100 px-4 py-2">
      <Text className="flex-1 font-bold">Datum</Text>
      <Text className="flex-1 font-bold">Versendet von</Text>
      <Text className="flex-1 text-right font-bold">Anzahl Dokumente</Text>
      <Text className="w-12" />
    </View>
  )
}
