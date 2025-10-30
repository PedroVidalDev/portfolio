import * as IoIcons from 'react-icons/io5'

import type { IconProps } from './types'
import { themes } from 'themes/'

export const Icon = (props: IconProps) => {
  const { name, size = 24, color = 'GRAY_0' } = props

  const IconComponent =
    IoIcons[name as keyof typeof IoIcons] || IoIcons.IoLogoBitcoin

  return <IconComponent size={size} color={themes.COLORS[color]} />
}
