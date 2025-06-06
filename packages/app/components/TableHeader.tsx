import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { Platform } from 'react-native'

export function TableHeader() {
  const padding = Platform.select({
    web: 'py-3',
    default: 'py-2',
  })

  return (
    <View className={`flex-row border-b border-gray-300 ${padding}`}>
      <Text className="flex-[1] font-bold">Datum</Text>
      <Text className="flex-[3] font-bold">Versendet von</Text>
      <Text className="flex-[2] text-right font-bold">Anzahl Dokumente</Text>
      <Text className="flex-[1]" />
    </View>
  )
}
