import * as DocumentPicker from 'expo-document-picker'

export async function uploadFile(): Promise<string | undefined> {
  const result = await DocumentPicker.getDocumentAsync({ type: '*/*' })
  if (!result.canceled) {
    return result.assets[0]?.name
  }
  return undefined
}
