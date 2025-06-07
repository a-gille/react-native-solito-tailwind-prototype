import { Picker } from '@react-native-picker/picker'
import { View } from 'app/design/view'

type Option = {
  label: string
  value: string
}

type PlatformSelectProps = {
  value: string
  options: Option[]
  onValueChange: (value: string) => void
  className?: string
}

export function PlatformSelect({
  value,
  options,
  onValueChange,
  className = '',
}: PlatformSelectProps) {
  return (
    <View className={`flex-col ${className}`}>
      <View className="rounded-md border border-gray-300 hover:border-black">
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          className="bg-transparent px-2 py-2 hover:cursor-pointer"
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
              style={{ fontSize: 15 }}
            />
          ))}
        </Picker>
      </View>
    </View>
  )
}
