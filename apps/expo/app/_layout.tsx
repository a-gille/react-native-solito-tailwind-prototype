import { HomeScreen } from 'app/features/home/screen'
import { Provider } from 'app/provider'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Postfach' }} />
        <Stack.Screen name="message/[id]" options={{ title: 'Nachricht' }} />
        <Stack.Screen
          name="message/send"
          options={{ title: 'Nachricht versenden' }}
        />
      </Stack>
    </Provider>
  )
}
