// components/BottomTabBar.tsx
import { View } from 'react-native'
import { NavButton } from '../Shared/NavButton'

export function BottomTabBar() {
  return (
    <View className="border-primary flex-row justify-around border-t bg-white px-4 py-2">
      <NavButton
        className="flex-1 px-2 py-2 text-center"
        classNameActive="border-b-2 border-primary text-primary"
        classNameInActive="text-gray-500"
        href="/?id=Posteingang"
        id="Posteingang"
        title="Posteingang"
      >
        Posteingang
      </NavButton>
      <NavButton
        className="flex-1 px-2 py-2 text-center"
        classNameActive="border-b-2 border-primary text-primary"
        classNameInActive="text-gray-500"
        href="/?id=Postausgang"
        id="Postausgang"
        title="Postausgang"
      >
        Postausgang
      </NavButton>
    </View>
  )
}
