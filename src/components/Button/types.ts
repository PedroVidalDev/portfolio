import * as IoIcons from 'react-icons/fa6'
import * as DiIcons from 'react-icons/di'

export type ButtonProps = {
  label: string
  icon?: keyof typeof IoIcons | keyof typeof DiIcons
  hide?: boolean
  onClick?: () => void
  type: 'primary' | 'secondary'
}
