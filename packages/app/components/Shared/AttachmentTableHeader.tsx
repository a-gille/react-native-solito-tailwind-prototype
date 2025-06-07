import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { Platform } from 'react-native'

export function AttachmentTableHeader() {
  const padding = Platform.select({
    web: 'py-3',
    default: 'py-2',
  })

  return (
    <View className={`flex-row gap-2 border-b border-gray-300 ${padding}`}>
      <Text className="flex-[1] font-bold">Datum</Text>
      <Text className="flex-[1] font-bold">Dateiname</Text>
      <Text className="flex-[1] font-bold">Kommentar</Text>
    </View>
  )
}
