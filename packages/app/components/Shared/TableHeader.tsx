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
      <Text className="w-1/4 font-bold">Datum</Text>
      <Text className="w-1/2 font-bold">Versendet von</Text>
      <Text className="w-1/6 text-right font-bold">Anzahl Dokumente</Text>
      <Text className="w-1/12" />
    </View>
  )
}
