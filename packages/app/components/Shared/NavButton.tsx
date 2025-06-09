import { TextLink } from 'app/design/typography'
import { createParam } from 'solito'
import { useState, useEffect } from 'react'
import { ComponentProps } from 'react'

const { useParam } = createParam<{ id: string }>()

type NavButtonProps = ComponentProps<typeof TextLink> & {
  id: string
  classNameActive: string
  classNameInActive: string
}

export function NavButton({
  id,
  className = '',
  classNameActive = '',
  classNameInActive = '',
  ...props
}: NavButtonProps) {
  const [currentId] = useParam('id')
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (currentId !== undefined) {
      setIsActive(currentId === id)
    }
  }, [currentId, id])

  return (
    <TextLink
      {...props}
      className={`
        ${className}
        ${isActive ? classNameActive : classNameInActive}
        px-2 transition-colors duration-500
      `}
    ></TextLink>
  )
}
