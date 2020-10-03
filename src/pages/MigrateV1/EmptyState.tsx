import React from 'react'
import { AutoColumn } from '../../components/Column'
import { TYPE } from '../../components/Shared'

export function EmptyState({ message }: { message: string }) {
  return (
    <AutoColumn style={{ minHeight: 200, justifyContent: 'center', alignItems: 'center' }}>
      <TYPE.body>{message}</TYPE.body>
    </AutoColumn>
  )
}
