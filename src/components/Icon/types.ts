import * as IoIcons from 'react-icons/fa6'
import * as DiIcons from 'react-icons/di'

import type { themes } from '@themes/'

export type IconProps = {
  name: keyof typeof IoIcons | keyof typeof DiIcons
  size?: number
  color?: keyof typeof themes.COLORS
}
