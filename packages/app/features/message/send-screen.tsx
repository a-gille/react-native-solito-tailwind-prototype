import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { Platform } from 'react-native'
import { ScrollView } from 'moti'
import { Card } from 'app/components/Shared/Card'
import { Mail, Upload } from '@nandorojo/iconic/src'
import { NormalButton } from 'app/components/Shared/NormalButton'

export function MailSendScreen() {
  const isMobile = Platform.OS !== 'web'

  return (
    <View className="flex-1">
      <View className="flex-1">
        {!isMobile && (
          <View className="flex-row  items-center justify-center gap-4">
            <Mail className="text-primary h-10 w-10" />
            <H1>Nachricht versenden</H1>
          </View>
        )}
        <View className="flex-1 flex-row px-2 pt-2">
          <View className="flex-[6]">
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
                  <View className="flex-row gap-1">
                    <Text>Betreff</Text>
                    <Text className="text-red-400">*</Text>
                  </View>
                </View>
                <View className="mb-4">
                  <View className="flex-row gap-1">
                    <Text>Nachricht</Text>
                    <Text className="text-red-400">*</Text>
                  </View>
                </View>
                <View className="mb-4 gap-4">
                  <Text>
                    Hier können Sie uns ein oder mehrere Dokumente zur Verfügung
                    stellen und kommentieren.
                  </Text>
                  <View>
                    <NormalButton
                      className="hover:text-primary bg-primary"
                      href={'/'}
                    >
                      <View className="gap-2cd flex-row items-center">
                        <Upload />
                        <Text>Datei hinzufügen</Text>
                      </View>
                    </NormalButton>
                  </View>
                </View>
                <View className="mb-6">
                  <Text>
                    <Text className="font-semibold">Hinweis:</Text> Erlaubte
                    Dateiformate sind .bmp, .doc, .docx, .gif, .jpeg, .jpg,
                    .pdf, .png, .rtf, .tif, .tiff, .txt, .xls oder .xlsx.
                    Passwortgeschützte Dateien können nicht verarbeitet werden.
                    Es dürfen maximal 30 MB hochgeladen werden. Eine Datei darf
                    maximal 10 MB groß sein.
                  </Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <NormalButton
                    href={'/?id=Posteingang'}
                    className="border border-solid border-gray-200"
                  >
                    Abbrechen
                  </NormalButton>
                  <NormalButton
                    className="bg-primary rounded-md  text-white"
                    href={'/'}
                  >
                    Abenden
                  </NormalButton>
                </View>
              </Card>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}
