import * as IoIcons from 'react-icons/fa6'
import * as DiIcons from 'react-icons/di'

import type { themes } from '@themes/'

export type ButtonProps = {
  label: string
  color?: keyof typeof themes.COLORS
  icon?: keyof typeof IoIcons | keyof typeof DiIcons
  hide?: boolean
  onClick?: () => void
  type: 'primary' | 'secondary'
}
