// components/ResponsiveNavigation.tsx
import { Platform } from 'react-native'
import { View } from 'app/design/view'
import { NavSidebar } from '../Web/NavSidebar'
import { BottomTabBar } from '../Mobile/BottomTabBar'

export function ResponsiveNavigation() {
  const isWeb = Platform.OS === 'web'
  const TabBar = Platform.select({
    web: <NavSidebar />,
    default: <BottomTabBar />,
  })

  return TabBar
}
