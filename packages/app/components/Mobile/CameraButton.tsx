// components/UploadButton.tsx
import { Platform } from 'react-native'
import { Text } from 'app/design/typography'
import { Camera } from '@nandorojo/iconic/src'
import { pickFromCamera } from 'app/utils/takepicture'
import { NormalPressable } from '../Shared/NormalPressable'

export function CameraButton() {
  const isMobile = Platform.OS !== 'web'

  return (
    <NormalPressable onPress={pickFromCamera}>
      <Camera className="text-black" />
      <Text className="font-sm text-sm ">Datei Hinzufügen</Text>
    </NormalPressable>
  )
}
