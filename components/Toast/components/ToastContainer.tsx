import React, { memo, useEffect } from 'react'
import { Toast, ToastType } from '../types'
import { useToast } from '../state/useToast'

export const ToastContainer: React.FC<Toast> = memo(({ id, message, type  }) => {

  const removeToast = useToast((state) => state.removeToast)

  useEffect( () => {
    const timer = setTimeout(() => removeToast(id as Number), 1500)
    return () => clearTimeout(timer)
  }, [])

  const bgColor: string = getToastBgColor(type)

  return (
    <div className={`min-w-[200px] p-4 min-h-[60px] ${bgColor} text-white p-4 rounded-lg shadow-lg text-center`}>
      {message}
    </div>
  )
})

const getToastBgColor: (type: ToastType) => string = (type: ToastType) => {
  switch (type) {
    case 'success':
      return 'bg-emerald-750';
    case 'error':
      return 'bg-red-500';
    case 'info':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500'; // fallback color
  }
}