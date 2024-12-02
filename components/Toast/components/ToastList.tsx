import React from 'react'
import { useToast } from '../state/useToast'
import { Toast } from '../types'
import { ToastContainer } from './ToastContainer'

export const ToastList: React.FC<any> = (props) => {
  const toasts: Toast[] = useToast((state) => state.toasts)

  return (
    <div className='fixed top-4 left-1/2 transform -translate-x-1/2 space-y-4 z-50 items-center justify-center'>
      {
        toasts.map((toast) => <ToastContainer key={toast.id as number} {...toast}/>)
      }
    </div>
  )
}