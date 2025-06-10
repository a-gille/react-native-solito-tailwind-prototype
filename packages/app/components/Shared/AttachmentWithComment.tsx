import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { NormalPressable } from './NormalPressable'
import { Close } from '@nandorojo/iconic/src'
import { Textarea } from './Textarea'

interface Props {
  id: number
  title: string
  onDelete: (id: number) => void
}

export function AttachmentWithComment({ id, title, onDelete }: Props) {
  return (
    <View className="space-between mb-4 flex-row gap-4">
      <View className="space-between flex-1 flex-row items-center rounded-md border border-gray-300 p-2">
        <Text className="flex-1">{title}</Text>
        <NormalPressable onPress={() => onDelete(id)}>
          <Close className="text-black"></Close>
        </NormalPressable>
      </View>
      <View className="flex-1">
        <Text>Kommentar</Text>
        <Textarea numberOfLines={1} placeholder="Dein Kommentar..." />
      </View>
    </View>
  )
}
