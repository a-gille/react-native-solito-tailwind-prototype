// components/NavSidebar.tsx
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { NavButton } from '../Shared/NavButton'

export function NavSidebar() {
  return (
    <View className="flex-col space-y-2 py-4">
      <Text className="text-primary text-lg font-semibold">Postach</Text>
      <NavButton
        classNameActive="border-primary border-l-2"
        classNameInActive="border-l-2 border-transparent"
        href="/?id=Posteingang"
        id="Posteingang"
        title="Posteingang"
      >
        Posteingang
      </NavButton>
      <NavButton
        classNameActive="border-primary border-l-2"
        classNameInActive="border-l-2 border-transparent"
        href="/?id=Postausgang"
        id="Postausgang"
        title="Postausgang"
      >
        Postausgang
      </NavButton>
    </View>
  )
}
