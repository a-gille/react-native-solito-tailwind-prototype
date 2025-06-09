import * as ImagePicker from 'expo-image-picker'

export async function pickFromCamera() {
  const permission = await ImagePicker.requestCameraPermissionsAsync()

  if (!permission.granted) {
    alert('Kamerazugriff wurde verweigert.')
    return
  }

  const result = await ImagePicker.launchCameraAsync()

  if (!result.canceled) {
    const photo = result.assets[0]
    console.log('Aufgenommenes Foto:', photo)
    return photo
  }
}
