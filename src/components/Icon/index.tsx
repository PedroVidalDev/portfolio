import * as IoIcons from 'react-icons/fa6'
import * as DiIcons from 'react-icons/di'

import type { IconProps } from './types'
import { themes } from 'themes/'

export const Icon = (props: IconProps) => {
  const { name, size = 24, color = 'GRAY_0' } = props

  const IconComponent =
    IoIcons[name as keyof typeof IoIcons] ||
    DiIcons[name as keyof typeof DiIcons] ||
    IoIcons.FaApple

  return <IconComponent size={size} color={themes.COLORS[color]} />
}
