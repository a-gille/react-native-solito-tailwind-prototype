export async function useUploadFile() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '*/*' // kannst du anpassen, z.B. 'image/*' oder 'application/pdf'
  input.multiple = false
  input.onchange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
      console.log('Hochgeladene Datei:', file)
      // hier weiterverarbeiten, z.B. upload starten
    }
  }
  input.click()
}
