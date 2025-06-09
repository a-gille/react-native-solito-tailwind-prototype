import { Pressable, PressableProps } from 'react-native'
import { styled } from 'nativewind'
import { View } from 'app/design/view'

type NormalPressableProps = PressableProps & {
  className?: string
  children?: React.ReactNode
}

const StyledPressable = styled(Pressable)

export function NormalPressable({
  className = '',
  children,
  ...props
}: NormalPressableProps) {
  return (
    <StyledPressable
      {...props}
      className={`hover:text-primary flex-row items-center gap-1 rounded-md px-4 py-1 duration-200 ${className}`}
    >
      {children}
    </StyledPressable>
  )
}
