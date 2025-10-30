import * as IoIcons from 'react-icons/fa6'
import type { themes } from '@themes/'

export type IconProps = {
  name: keyof typeof IoIcons
  size?: number
  color?: keyof typeof themes.COLORS
}
