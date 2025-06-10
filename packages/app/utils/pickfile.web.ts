export async function uploadFile(): Promise<string | undefined> {
  return new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '*/*'
    input.multiple = false
    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]
      if (file) {
        resolve(file.name)
      } else {
        resolve(undefined)
      }
    }
    input.click()
  })
}
