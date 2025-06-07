import { TextLink } from 'app/design/typography'
import { ComponentProps } from 'react'

export function NormalButton({
  className = '',
  ...props
}: ComponentProps<typeof TextLink>) {
  return (
    <TextLink
      {...props}
      className={`
        ${className}
        rounded-md px-4 py-1 transition-colors duration-200
      `}
    ></TextLink>
  )
}
