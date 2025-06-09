import * as DocumentPicker from 'expo-document-picker'

export async function useUploadFile() {
  const result = await DocumentPicker.getDocumentAsync({ type: '*/*' })
  if (!result.canceled) {
    return result.assets[0] // contains `uri`, `name`, `mimeType`, etc.
  }
}
