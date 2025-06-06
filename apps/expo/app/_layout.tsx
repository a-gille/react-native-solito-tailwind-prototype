import { HomeScreen } from 'app/features/home/screen'
import { Provider } from 'app/provider'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Postfach' }} />
        <Stack.Screen name="user/index" options={{ title: 'Nutzer' }} />
      </Stack>
    </Provider>
  )
}
