import { Bounce, toast } from 'react-toastify'

export const toastEmmiter = (message: string, type: 'success' | 'error') => {
  toast(message, {
    type: type,
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
  })
}
