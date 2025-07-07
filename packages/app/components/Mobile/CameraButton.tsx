// components/UploadButton.tsx
import { Text } from 'app/design/typography'
import { Camera } from '@nandorojo/iconic/src'
import { takePicture } from 'app/utils/takepicture'
import { NormalPressable } from '../Shared/NormalPressable'

interface Props {
  onAdd: (title: string) => void
}

export function CameraButton({ onAdd }: Props) {
  const onPress = async () => {
    const result = await takePicture()
    if (result != undefined) {
      onAdd(result)
    }
  }

  return (
    <NormalPressable onPress={() => onPress()}>
      <Camera className="text-black" />
      <Text className="font-sm text-sm ">Datei hinzufügen</Text>
    </NormalPressable>
  )
}
