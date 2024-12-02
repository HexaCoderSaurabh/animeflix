import { create } from 'zustand'
import { ToastState, Toast } from '../types'

export const useToast = create<ToastState>((set, get) => ({
  toasts: [],
  addToast (toast: Toast) {
    set((state) => ({
      toasts: [...state.toasts, { id: toast.id || Date.now(), ...toast}]
    }))
  },
  removeToast: (id: Number) => {
    set((state) => ({
      toasts: state.toasts.filter(toast => toast.id !== id)
    }))
  }
}))