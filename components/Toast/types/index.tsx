export type Toast = {
  id?: Number, // epoch time
  type: ToastType,
  message?: string
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

export type ToastState = {
  toasts: Toast[],
  addToast: (toast: Toast) => void,
  removeToast: (id: Number) => void
}