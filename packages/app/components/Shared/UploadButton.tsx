// components/UploadButton.tsx
import { Platform } from 'react-native'
import { Text } from 'app/design/typography'
import { Upload } from '@nandorojo/iconic/src'
import { uploadFile } from '../../utils/pickfile'
import { NormalPressable } from './NormalPressable'

interface Props {
  onAdd: (title: string) => void
}

export function UploadButton({ onAdd }: Props) {
  const isMobile = Platform.OS !== 'web'
  const onPress = async () => {
    const name = await uploadFile()
    if (name != undefined) {
      onAdd(name)
    }
  }

  return (
    <NormalPressable onPress={() => onPress()}>
      <Upload className={isMobile ? 'text-black' : ''} />
      <Text className="font-sm text-sm ">Datei Hinzufügen</Text>
    </NormalPressable>
  )
}
