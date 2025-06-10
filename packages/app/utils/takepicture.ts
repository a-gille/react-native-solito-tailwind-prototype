import * as ImagePicker from 'expo-image-picker'

export async function takePicture(): Promise<string | undefined> {
  const permission = await ImagePicker.requestCameraPermissionsAsync()

  if (!permission.granted) {
    return undefined
  }

  const result = await ImagePicker.launchCameraAsync()

  if (!result.canceled) {
    const photo = result.assets[0]

    if (photo?.uri != undefined) {
      const name = photo.uri.split('/').pop() || ''
      console.log(name)
      return name
    } else {
      return undefined
    }
  }
  return undefined
}
