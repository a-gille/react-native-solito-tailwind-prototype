import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { Platform } from 'react-native'
import { ScrollView } from 'moti'
import { Card } from 'app/components/Shared/Card'
import { Mail } from '@nandorojo/iconic/src'
import { NormalButton } from 'app/components/Shared/NormalButton'
import { PlatformSelect } from 'app/components/Shared/PlatformSelect'
import { useState } from 'react'
import { Textarea } from 'app/components/Shared/Textarea'
import { UploadButton } from 'app/components/Shared/UploadButton'
import { CameraButton } from 'app/components/Mobile/CameraButton'

export function MailSendScreen() {
  const isMobile = Platform.OS !== 'web'
  const [selected, setSelected] = useState('1')
  const options = [
    { label: 'Allgemeine Anfrage', value: '1' },
    { label: 'Beschwerde', value: '2' },
    { label: 'Feedback', value: '3' },
  ]

  return (
    <View>
      {!isMobile && (
        <View className="flex-row  items-center justify-center gap-4">
          <Mail className="text-primary h-10 w-10" />
          <H1>Nachricht versenden</H1>
        </View>
      )}
      <View className="px-2 pt-2">
        <ScrollView>
          <Card
            title={'Angaben zur Nachricht'}
            headerContent={
              <View className="flex-row gap-1">
                <Text>Pflichtfelder</Text>
                <Text className="text-red-400">*</Text>
              </View>
            }
          >
            <View className="mb-4">
              <View className="mb-1 flex-row gap-1">
                <Text>Betreff</Text>
                <Text className="text-red-400">*</Text>
              </View>
              <View className="">
                <PlatformSelect
                  value={selected}
                  onValueChange={setSelected}
                  options={options}
                  className="w-full md:w-1/2"
                />
              </View>
            </View>
            <View className="mb-4">
              <View className="flex-row gap-1">
                <Text>Nachricht</Text>
                <Text className="text-red-400">*</Text>
              </View>
              <Textarea
                multiline
                numberOfLines={4}
                placeholder="Deine Nachricht..."
                style={{ textAlignVertical: 'top' }}
              />
            </View>
            <View className="mb-4 gap-4">
              <Text>
                Hier können Sie uns ein oder mehrere Dokumente zur Verfügung
                stellen und kommentieren.
              </Text>
              <View className="flex-row justify-between">
                <UploadButton />
                {isMobile ? <CameraButton /> : <></>}
              </View>
            </View>
            <View className="mb-6">
              <Text>
                <Text className="font-semibold">Hinweis:</Text> Erlaubte
                Dateiformate sind .bmp, .doc, .docx, .gif, .jpeg, .jpg, .pdf,
                .png, .rtf, .tif, .tiff, .txt, .xls oder .xlsx.
                Passwortgeschützte Dateien können nicht verarbeitet werden. Es
                dürfen maximal 30 MB hochgeladen werden. Eine Datei darf maximal
                10 MB groß sein.
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <NormalButton
                href={'/?id=Posteingang'}
                className="border border-solid border-gray-300"
              >
                Abbrechen
              </NormalButton>
              <NormalButton
                className="bg-primary text-white"
                href={'/?id=Postausgang'}
              >
                Abenden
              </NormalButton>
            </View>
          </Card>
        </ScrollView>
      </View>
    </View>
  )
}
