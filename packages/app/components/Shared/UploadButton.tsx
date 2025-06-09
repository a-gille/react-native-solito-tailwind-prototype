// components/UploadButton.tsx
import { Platform } from 'react-native'
import { Text } from 'app/design/typography'
import { Upload } from '@nandorojo/iconic/src'
import { useUploadFile } from '../../utils/pickfile'
import { NormalPressable } from './NormalPressable'

export function UploadButton() {
  const isMobile = Platform.OS !== 'web'

  return (
    <NormalPressable onPress={useUploadFile}>
      <Upload className={isMobile ? 'text-black' : ''} />
      <Text className="font-sm text-sm ">Datei Hinzufügen</Text>
    </NormalPressable>
  )
}
