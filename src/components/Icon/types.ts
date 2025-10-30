import * as IoIcons from 'react-icons/io5'
import type { themes } from '@themes/'

export type IconProps = {
  name: keyof typeof IoIcons
  size?: number
  color?: keyof typeof themes.COLORS
}
