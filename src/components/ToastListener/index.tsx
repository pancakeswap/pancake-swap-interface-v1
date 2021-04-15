import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, Toast } from 'greenteaswap-ui-kit'
import useToast from 'hooks/useToast'
import { AppState } from '../../state'

const ToastListener = () => {
  const toasts: Toast[] = useSelector((state: AppState) => state.toasts.data)
  const { remove } = useToast()

  const handleRemove = (id: string) => remove(id)

  return <ToastContainer toasts={toasts} onRemove={handleRemove} />
}

export default ToastListener
